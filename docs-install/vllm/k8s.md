# Triển khai vLLM trên Kubernetes {#deploying-vllm-on-kubernetes}

Triển khai vLLM trên Kubernetes là cách phục vụ mô hình học máy có khả năng mở rộng và hiệu quả. Hướng dẫn này đưa bạn qua các bước triển khai vLLM bằng Kubernetes thuần.

## Triển khai với CPU {#deployment-with-cpus}

**Lưu ý:** việc dùng CPU ở đây chỉ nhằm mục đích minh họa và kiểm thử, hiệu năng sẽ không bằng GPU.

### Tạo PVC và Secret của Kubernetes {#create-a-kubernetes-pvc-and-secret}

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: vllm-models
spec:
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  resources:
    requests:
      storage: 50Gi
---
apiVersion: v1
kind: Secret
metadata:
  name: hf-token-secret
type: Opaque
data:
  token: $(HF_TOKEN)
```

### Khởi động máy chủ vLLM dưới dạng Deployment và Service của Kubernetes {#start-the-vllm-server-as-a-kubernetes-deployment-and-service}

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: vllm-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app.kubernetes.io/name: vllm
  template:
    metadata:
      labels:
        app.kubernetes.io/name: vllm
    spec:
      containers:
      - name: vllm
        image: vllm/vllm-openai:latest
        command: ["/bin/sh", "-c"]
        args: [
          "vllm serve meta-llama/Llama-3.2-1B-Instruct"
        ]
        env:
        - name: HUGGING_FACE_HUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: hf-token-secret
              key: token
        ports:
          - containerPort: 8000
        volumeMounts:
          - name: llama-storage
            mountPath: /root/.cache/huggingface
      volumes:
      - name: llama-storage
        persistentVolumeClaim:
          claimName: vllm-models
---
apiVersion: v1
kind: Service
metadata:
  name: vllm-server
spec:
  selector:
    app.kubernetes.io/name: vllm
  ports:
  - protocol: TCP
    port: 8000
    targetPort: 8000
  type: ClusterIP
```

Kiểm tra máy chủ vLLM đã khởi động thành công qua log:

```bash
kubectl logs -l app.kubernetes.io/name=vllm
```

## Triển khai với GPU {#deployment-with-gpus}

**Điều kiện tiên quyết:** bảo đảm bạn có một cụm Kubernetes đang chạy với GPU.

### Tạo PVC, Secret và Deployment cho vLLM {#create-a-pvc-secret-and-deployment-for-vllm}

#### PVC {#pvc}

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mistral-7b
  namespace: default
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 50Gi
  storageClassName: default
  volumeMode: Filesystem
```

#### Secret {#secret}

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: hf-token-secret
  namespace: default
type: Opaque
stringData:
  token: "REPLACE_WITH_TOKEN"
```

#### Deployment {#deployment}

##### NVIDIA GPU {#nvidia-gpu}

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mistral-7b
  namespace: default
  labels:
    app: mistral-7b
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mistral-7b
  template:
    metadata:
      labels:
        app: mistral-7b
    spec:
      volumes:
      - name: cache-volume
        persistentVolumeClaim:
          claimName: mistral-7b
      - name: shm
        emptyDir:
          medium: Memory
          sizeLimit: "2Gi"
      containers:
      - name: mistral-7b
        image: vllm/vllm-openai:latest
        command: ["/bin/sh", "-c"]
        args: [
          "vllm serve mistralai/Mistral-7B-Instruct-v0.3 --trust-remote-code --enable-chunked-prefill --max_num_batched_tokens 1024"
        ]
        env:
        - name: HUGGING_FACE_HUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: hf-token-secret
              key: token
        ports:
        - containerPort: 8000
        resources:
          limits:
            cpu: "10"
            memory: 20G
            nvidia.com/gpu: "1"
          requests:
            cpu: "2"
            memory: 6G
            nvidia.com/gpu: "1"
        volumeMounts:
        - mountPath: /root/.cache/huggingface
          name: cache-volume
        - name: shm
          mountPath: /dev/shm
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 60
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 60
          periodSeconds: 5
```

##### AMD GPU {#amd-gpu}

Xem deployment.yaml bên dưới nếu dùng GPU AMD ROCm như MI300X.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mistral-7b
  namespace: default
  labels:
    app: mistral-7b
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mistral-7b
  template:
    metadata:
      labels:
        app: mistral-7b
    spec:
      volumes:
      - name: cache-volume
        persistentVolumeClaim:
          claimName: mistral-7b
      - name: shm
        emptyDir:
          medium: Memory
          sizeLimit: "8Gi"
      hostNetwork: true
      hostIPC: true
      containers:
      - name: mistral-7b
        image: rocm/vllm:rocm6.2_mi300_ubuntu20.04_py3.9_vllm_0.6.4
        securityContext:
          seccompProfile:
            type: Unconfined
          runAsGroup: 44
          capabilities:
            add:
            - SYS_PTRACE
        command: ["/bin/sh", "-c"]
        args: [
          "vllm serve mistralai/Mistral-7B-v0.3 --port 8000 --trust-remote-code --enable-chunked-prefill --max_num_batched_tokens 1024"
        ]
        env:
        - name: HUGGING_FACE_HUB_TOKEN
          valueFrom:
            secretKeyRef:
              name: hf-token-secret
              key: token
        ports:
        - containerPort: 8000
        resources:
          limits:
            cpu: "10"
            memory: 20G
            amd.com/gpu: "1"
          requests:
            cpu: "6"
            memory: 6G
            amd.com/gpu: "1"
        volumeMounts:
        - name: cache-volume
          mountPath: /root/.cache/huggingface
        - name: shm
          mountPath: /dev/shm
```

## Tạo Service của Kubernetes cho vLLM {#create-a-kubernetes-service-for-vllm}

```yaml
apiVersion: v1
kind: Service
metadata:
  name: mistral-7b
  namespace: default
spec:
  ports:
  - name: http-mistral-7b
    port: 80
    protocol: TCP
    targetPort: 8000
  selector:
    app: mistral-7b
  sessionAffinity: None
  type: ClusterIP
```

## Triển khai và kiểm thử {#deploy-and-test}

Áp dụng các cấu hình deployment và service bằng `kubectl apply -f <filename>`:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

Để kiểm thử việc triển khai, chạy lệnh curl sau:

```bash
curl http://mistral-7b.default.svc.cluster.local/v1/completions \
  -H "Content-Type: application/json" \
  -d '{
        "model": "mistralai/Mistral-7B-Instruct-v0.3",
        "prompt": "San Francisco is a",
        "max_tokens": 7,
        "temperature": 0
      }'
```

Nếu dịch vụ được triển khai đúng, bạn sẽ nhận được phản hồi từ mô hình vLLM.

## Khắc phục sự cố {#troubleshooting}

### Lỗi Startup Probe hoặc Readiness Probe {#startup-probe-or-readiness-probe-failure}

Nếu `failureThreshold` của startup hoặc readiness probe quá thấp so với thời gian cần để khởi động máy chủ, bộ lập lịch Kubernetes sẽ dừng container. Một vài dấu hiệu cho thấy điều này đã xảy ra:

- Log container có chứa "KeyboardInterrupt: terminated"
- `kubectl get events` hiển thị thông báo "Container $NAME failed startup probe, will be restarted"

Để giảm thiểu, hãy tăng `failureThreshold` để máy chủ mô hình có thêm thời gian bắt đầu phục vụ. Bạn có thể xác định `failureThreshold` lý tưởng bằng cách bỏ các probe khỏi manifest và đo thời gian máy chủ mô hình cần để báo sẵn sàng phục vụ.

## Kết luận {#conclusion}

Triển khai vLLM bằng Kubernetes cho phép mở rộng và quản lý hiệu quả các mô hình ML tận dụng tài nguyên GPU. Làm theo các bước ở trên, bạn có thể thiết lập và kiểm thử một triển khai vLLM trong cụm Kubernetes của mình. Nếu gặp sự cố hoặc có đề xuất, xin hãy đóng góp vào tài liệu.