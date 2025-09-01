# Deploying LLM Applications with Docker

Follow the tutorial: [Deploy LLM Applications Using Docker](https://www.datacamp.com/tutorial/deploy-llm-applications-using-docker)

## Approaches to Developing and Deploying AI Applications

There are two main approaches to developing and deploying AI applications:

- **Fully Open Source**: This approach emphasizes privacy and data protection.
- **Fully Closed Source**: This method involves integrating multiple APIs and cloud services.

Both approaches have their advantages and disadvantages. In our case, we have chosen the second approach, where we will integrate multiple AI services. This allows us to build an AI application that is fast and takes only a few seconds to build and deploy. Our main focus is to reduce the Docker image size, which can be effectively achieved by integrating multiple AI services.

We will be building an all-purpose document Q&A chatbot that allows users to upload any documents and chat with it at real-time speed. It is quite similar to Google’s NotebookLM.

![Deploying LLM Applications with Docker](https://github.com/user-attachments/assets/1d82de55-3db6-4f70-8ff3-f2c46a5ed6ee)

## Tools Used in This Project

1. **Gradio Blocks**: For creating a user interface that allows users to upload any text document and chat with the document easily.
2. **LlamaCloud**: For parsing files and extracting text data into markdown style.
3. **MixedBread AI**: For converting loaded documents into embeddings and also converting chat messages into embeddings for context retrieval.
4. **Groq Cloud**: For accessing fast LLM responses. In this project, we will be using the llama-3.1-70b model.
5. **LlamaIndex**: For creating the RAG (Retrieval Augmented Generation) pipeline that orchestrates all of the AI services. The pipeline will use the uploaded file and user messages to generate context-aware answers.
6. **Docker**: For encapsulating the app, dependencies, environment, and configurations.
7. **Hugging Face Cloud**: We will push all the files to the Spaces repository, and Hugging Face will automatically build the image using the Dockerfile and deploy it to the server.

## Application Code

### app.py

```python
import os

import gradio as gr
from llama_index.core import SimpleDirectoryReader, VectorStoreIndex
from llama_index.embeddings.mixedbreadai import MixedbreadAIEmbedding
from llama_index.llms.groq import Groq
from llama_parse import LlamaParse

# API keys
llama_cloud_key = os.environ.get("LLAMA_CLOUD_API_KEY")
groq_key = os.environ.get("GROQ_API_KEY")
mxbai_key = os.environ.get("MXBAI_API_KEY")
if not (llama_cloud_key and groq_key and mxbai_key):
    raise ValueError(
        "API Keys not found! Ensure they are passed to the Docker container."
    )

# models name
llm_model_name = "llama-3.1-70b-versatile"
embed_model_name = "mixedbread-ai/mxbai-embed-large-v1"

# Initialize the parser
parser = LlamaParse(api_key=llama_cloud_key, result_type="markdown")

# Define file extractor with various common extensions
file_extractor = {
    ".pdf": parser,
    ".docx": parser,
    ".doc": parser,
    ".txt": parser,
    ".csv": parser,
    ".xlsx": parser,
    ".pptx": parser,
    ".html": parser,
    ".jpg": parser,
    ".jpeg": parser,
    ".png": parser,
    ".webp": parser,
    ".svg": parser,
}

# Initialize the embedding model
embed_model = MixedbreadAIEmbedding(api_key=mxbai_key, model_name=embed_model_name)

# Initialize the LLM

llm = Groq(model="llama-3.1-70b-versatile", api_key=groq_key)


# File processing function
def load_files(file_path: str):
    global vector_index
    if not file_path:
        return "No file path provided. Please upload a file."
    
    valid_extensions = ', '.join(file_extractor.keys())
    if not any(file_path.endswith(ext) for ext in file_extractor):
        return f"The parser can only parse the following file types: {valid_extensions}"

    document = SimpleDirectoryReader(input_files=[file_path], file_extractor=file_extractor).load_data()
    vector_index = VectorStoreIndex.from_documents(document, embed_model=embed_model)
    print(f"Parsing completed for: {file_path}")
    filename = os.path.basename(file_path)
    return f"Ready to provide responses based on: {filename}"


# Respond function
def respond(message, history):
    try:
        # Use the preloaded LLM
        query_engine = vector_index.as_query_engine(streaming=True, llm=llm)
        streaming_response = query_engine.query(message)
        partial_text = ""
        for new_text in streaming_response.response_gen:
            partial_text += new_text
            # Yield an empty string to cleanup the message textbox and the updated conversation history
            yield partial_text
    except (AttributeError, NameError):
        print("An error occurred while processing your request.")
        yield "Please upload the file to begin chat."


# Clear function
def clear_state():
    global vector_index
    vector_index = None
    return [None, None, None]


# UI Setup
with gr.Blocks(
    theme=gr.themes.Default(
        primary_hue="green",
        secondary_hue="blue",
        font=[gr.themes.GoogleFont("Poppins")],
    ),
    css="footer {visibility: hidden}",
) as demo:
    gr.Markdown("# DataCamp Doc Q&A 🤖📃")
    with gr.Row():
        with gr.Column(scale=1):
            file_input = gr.File(
                file_count="single", type="filepath", label="Upload Document"
            )
            with gr.Row():
                btn = gr.Button("Submit", variant="primary")
                clear = gr.Button("Clear")
            output = gr.Textbox(label="Status")
        with gr.Column(scale=3):
            chatbot = gr.ChatInterface(
                fn=respond,
                chatbot=gr.Chatbot(height=300),
                theme="soft",
                show_progress="full",
                textbox=gr.Textbox(
                    placeholder="Ask questions about the uploaded document!",
                    container=False,
                ),
            )

    # Set up Gradio interactions
    btn.click(fn=load_files, inputs=file_input, outputs=output)
    clear.click(
        fn=clear_state,  # Use the clear_state function
        outputs=[file_input, output],
    )

# Launch the demo
if __name__ == "__main__":
    demo.launch()
```

### requirements.txt

```plaintext
gradio
llama-index-embeddings-mixedbreadai
llama-index-llms-groq
llama-index
```

### Dockerfile

```dockerfile
# Dockerfile

# Use the official Python image with the desired version
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file to the working directory
COPY requirements.txt /app

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the working directory
COPY app.py /app

# Expose the port that Gradio will run on (default is 7860)
EXPOSE 7860

ENV GRADIO_SERVER_NAME="0.0.0.0"

# Command to run your application
CMD ["python", "app.py"]
```