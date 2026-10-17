# Cài đặt IPEX-LLM: CPU {#ipex-llm-installation-cpu}

## Cài đặt nhanh {#quick-installation}

Cài đặt IPEX-LLM hỗ trợ CPU bằng pip như sau:

```eval_rst	
.. tabs::

   .. tab:: Linux

      .. code-block:: bash

         pip install --pre --upgrade ipex-llm[all] --extra-index-url https://download.pytorch.org/whl/cpu

   .. tab:: Windows

      .. code-block:: cmd

         pip install --pre --upgrade ipex-llm[all]
```

Xem thêm thông tin tại [Thiết lập môi trường](#environment-setup).

```eval_rst
.. note::

   ``all`` option will trigger installation of all the dependencies for common LLM application development.

.. important::

   ``ipex-llm`` is tested with Python 3.9, 3.10 and 3.11; Python 3.11 is recommended for best practices.
```

## Yêu cầu khuyến nghị {#recommended-requirements}

Phần cứng và hệ điều hành khuyến nghị để có trải nghiệm tối ưu hóa IPEX-LLM mượt mà trên CPU:

* Phần cứng

  * Máy tính trang bị bộ xử lý Intel® Core™ thế hệ 12 trở lên và tối thiểu 16GB RAM
  * Máy chủ trang bị bộ xử lý Intel® Xeon®, tối thiểu 32GB RAM.

* Hệ điều hành

  * Ubuntu 20.04 trở lên
  * CentOS 7 trở lên
  * Windows 10/11, có hoặc không có WSL

## Thiết lập môi trường {#environment-setup}

Để đạt hiệu năng tối ưu với các mô hình LLM dùng tối ưu hóa của IPEX-LLM trên CPU Intel, dưới đây là một số thực hành tốt khi thiết lập môi trường:

Trước hết, nên dùng [Conda](https://conda-forge.org/download/) để tạo môi trường python 3.11:

```eval_rst	
.. tabs::

   .. tab:: Linux

      .. code-block:: bash

         conda create -n llm python=3.11
         conda activate llm

         pip install --pre --upgrade ipex-llm[all] --extra-index-url https://download.pytorch.org/whl/cpu

   .. tab:: Windows

      .. code-block:: cmd

         conda create -n llm python=3.11
         conda activate llm

         pip install --pre --upgrade ipex-llm[all]
```

Sau đó, để chạy một mô hình LLM với tối ưu hóa của IPEX-LLM (lấy `example.py` làm ví dụ):

```eval_rst	
.. tabs::

   .. tab:: Client

      It is recommended to run directly with full utilization of all CPU cores:

      .. code-block:: bash

         python example.py

   .. tab:: Server

      It is recommended to run with all the physical cores of a single socket:

      .. code-block:: bash

         # e.g. for a server with 48 cores per socket
         export OMP_NUM_THREADS=48
         numactl -C 0-47 -m 0 python example.py
```