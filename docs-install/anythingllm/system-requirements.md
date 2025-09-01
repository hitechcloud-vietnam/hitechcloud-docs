# System Requirements

AnythingLLM is fully customizable in every regard.

Given this customizable nature, your exact requirements to run AnythingLLM depend on many factors. You can use the tables below to get a rough idea of what it will take to run AnythingLLM.

AnythingLLM can be a wrapper around many external services that all accomplish some task - making AnythingLLM so lightweight it can run on the smallest machines - even Raspberry Pis!

## Recommended Configuration for AnythingLLM

This is the minimum value for running AnythingLLM. This will be enough for you to store some documents, send chats, and use AnythingLLM features.

| Property | Recommended Value |
|----------|-------------------|
| RAM      | 2GB              |
| CPU      | 2-core CPU (any) |
| Storage  | 5GB              |

## LLM Selection Impact

This is how you get chat responses. Popular hosted solutions like OpenAI tend to provide state-of-the-art responses with almost zero overhead. However, you will need an API key for any cloud-based LLM provider.

**Tip:** Host a local LLM on another machine that has a GPU if the device running AnythingLLM does not have a GPU. AnythingLLM can connect to any LLM running anywhere via API.

## Embedder Selection Impact

This is the model which you use to "embed" or vectorize text. Likewise, external services connected to AnythingLLM have zero overhead impact.

The default embedder runs on the same machine as AnythingLLM using CPU-only vectorization. If your documents are large or you need to vectorize a lot of data, you may want to use an external embedder provider and model.

## Vector Database Selection Impact

All supported vector databases either have no impact as they are externally hosted or can scale to hundreds of millions of vectors at the minimum recommended settings.

The default LanceDB vector database can handle anything you can throw at it.