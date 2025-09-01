# Deploying vLLM on Kubernetes

Deploying vLLM on Kubernetes is a scalable and efficient way to serve machine learning models. This guide walks you through deploying vLLM using native Kubernetes.

## Deployment with CPUs

**Note:** The use of CPUs here is for demonstration and testing purposes only, and its performance will not be on par with GPUs.

### Create a Kubernetes PVC and Secret

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

### Start the vLLM Server as a Kubernetes Deployment and Service

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

Verify the vLLM server has started successfully via the logs:

```bash
kubectl logs -l app.kubernetes.io/name=vllm
```

## Deployment with GPUs

**Pre-requisite:** Ensure that you have a running Kubernetes cluster with GPUs.

### Create a PVC, Secret, and Deployment for vLLM

#### PVC

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

#### Secret

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

#### Deployment

##### NVIDIA GPU

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

##### AMD GPU

Refer to the deployment.yaml below if using AMD ROCm GPU like MI300X.

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

## Create a Kubernetes Service for vLLM

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

## Deploy and Test

Apply the deployment and service configurations using `kubectl apply -f <filename>`:

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

To test the deployment, run the following curl command:

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

If the service is correctly deployed, you should receive a response from the vLLM model.

## Troubleshooting

### Startup Probe or Readiness Probe Failure

If the startup or readiness probe `failureThreshold` is too low for the time needed to start up the server, Kubernetes scheduler will kill the container. A couple of indications that this has happened:

- Container log contains "KeyboardInterrupt: terminated"
- `kubectl get events` shows message "Container $NAME failed startup probe, will be restarted"

To mitigate, increase the `failureThreshold` to allow more time for the model server to start serving. You can identify an ideal `failureThreshold` by removing the probes from the manifest and measuring how much time it takes for the model server to show it's ready to serve.

## Conclusion

Deploying vLLM with Kubernetes allows for efficient scaling and management of ML models leveraging GPU resources. By following the steps outlined above, you should be able to set up and test a vLLM deployment within your Kubernetes cluster. If you encounter any issues or have suggestions, please feel free to contribute to the documentation.