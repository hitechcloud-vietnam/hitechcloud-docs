/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  installSidebar: [
    'intro',
    
    {
      type: 'category',
      label: 'Ollama và OpenWebUI',
      items: [
        {
          type: 'doc',
          id: 'ollama/requirements',
        },
         {
          type: 'doc',
          id: 'ollama/gpu',
        },
        {
          type: 'doc',
          id: 'ollama/setup',
        },
        {
          type: 'doc',
          id: 'nginx',
        },
        {
          type: 'doc',
          id: 'ollama/docker',
        },
        {
          type: 'doc',
          id: 'ollama/project',
        },
        {
          type: 'doc',
          id: 'openwebui/docker-compose',
        },
        {
          type: 'doc',
          id: 'openwebui/start',
        },
        {
          type: 'doc',
          id: 'openwebui/troubleshooting',
        },
        {
          type: 'doc',
          id: 'ollama/development',
        },
         {
          type: 'doc',
          id: 'ollama/api',
        },
         {
          type: 'doc',
          id: 'ollama/faq',
        },
      ],
    },
    {
      type: 'category',
      label: 'RAG LocalGPT 2.0',
      items: [
        {
          type: 'doc',
          id: 'localgpt/localgpt',
        },
      ],
    },
     {
      type: 'category',
      label: 'Flowise AI with Docker',
      items: [
        {
          type: 'doc',
          id: 'flowiseai/flowiseai',
        },
      ],
    },
     {
      type: 'category',
      label: 'Dify on Ubuntu with Docker Compose',
      items: [
        {
          type: 'doc',
          id: 'dify/dify',
        },
      ],
    },
    {
      type: 'category',
      label: 'ComfyUI in Docker',
      items: [
        {
          type: 'doc',
          id: 'comfyui/comfyui',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fooocus in Docker',
      items: [
        {
          type: 'doc',
          id: 'fooocus/fooocus',
        },
      ],
    },
    {
      type: 'category',
      label: 'AnythingLLM Self-hosted',
      items: [
        {
          type: 'doc',
          id: 'anythingllm/overview',
        },
         {
          type: 'doc',
          id: 'anythingllm/available-images',
        },
        {
          type: 'doc',
          id: 'anythingllm/system-requirements',
        },
         {
          type: 'doc',
          id: 'anythingllm/quickstart',
        },
         {
          type: 'doc',
          id: 'anythingllm/cloud-docker',
        },
         {
          type: 'doc',
          id: 'anythingllm/localhost',
        },
      ],
    },
    {
      type: 'category',
      label: 'vLLM Self-hosted',
      items: [
        {
          type: 'doc',
          id: 'vllm/docker',
        },
         {
          type: 'doc',
          id: 'vllm/k8s',
        },
         {
          type: 'doc',
          id: 'vllm/nginx',
        },
      ],
    },
    {
      type: 'category',
      label: 'Deploying LLM Applications with Docker and vLLM',
      items: [
        {
          type: 'doc',
          id: 'Deploying-LLM-Applications-with-Docker/install'
        },
      ],
    },
    {
      type: 'category',
      label: 'Deploying IPEX-LLM ',
      items: [
        {
          type: 'doc',
          id: 'IPEX-LLM/install_cpu'
        },
        {
          type: 'doc',
          id: 'IPEX-LLM/install_gpu'
        },
      ],
    },
  ],
};

export default sidebars;
