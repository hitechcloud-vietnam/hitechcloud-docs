# Run AnythingLLM on Cloud using Docker

Running AnythingLLM on a cloud service is the best way to run a private multi-user instance of AnythingLLM with full control while not having to worry about the underlying infrastructure.

## Easy Cloud Deployment

AnythingLLM offers easily integrated one-click Docker deployment templates with Railway and Render.

This is the easiest way to self-host a cloud server version of AnythingLLM.

### Provider Minimum Instance Size

| Provider                | Minimum Instance Size |
|-------------------------|-----------------------|
| Amazon Web Services     | t3.small             |
| Google Cloud Provider   | e2-standard-2        |
| Azure Cloud             | B2ps v2              |

AnythingLLM offers community-maintained deployment templates for cloud providers: [GitHub Repository](https://github.com/Mintplex-Labs/anything-llm/tree/master/cloud-deployments).

## Deployment Steps

Once you are prepared to run AnythingLLM on your server, the process is quite simple.

You should provision a folder somewhere on the host machine so that you can re-pull the latest versions of AnythingLLM and persist data between container rebuilds.

### Deployment Command

```bash
# Assuming that you want to store app data in a folder at /var/lib/anythingllm

# Pull in the latest image
docker pull mintplexlabs/anythingllm:master

export STORAGE_LOCATION="/var/lib/anythingllm" && \
mkdir -p $STORAGE_LOCATION && \
touch "$STORAGE_LOCATION/.env" && \
docker run -d -p 3001:3001 \ # expose on port 3001 (can be any host port)
--cap-add SYS_ADMIN \
-v ${STORAGE_LOCATION}:/app/server/storage \
-v ${STORAGE_LOCATION}/.env:/app/server/.env \
-e STORAGE_DIR="/app/server/storage" \
mintplexlabs/anythingllm:master

# Visit http://localhost:3001 to use AnythingLLM!
```

Done! You are using AnythingLLM!

## More Information

### Backwards Compatibility

The Mintplex Labs team takes great care to ensure AnythingLLM is always backward compatible. In the event this changes, you will be alerted via code, deployment, or our regular communication channels on social, Discord, and email.

### Scaling

Since the AnythingLLM backend uses SQLite for its database, it is not recommended to attempt to scale the AnythingLLM backend horizontally since you would then need to have many containers all reading and writing to the same database.

In this case, we recommend using a more robust database like PostgreSQL and our PostgreSQL image, which will centralize the database as well as set PGVector as the vector database.

### SSL/HTTPS Support

In order to use SSL/HTTPS with AnythingLLM, you should use a reverse proxy like NGINX with a TLS certificate you can get from Let's Encrypt.

#### NGINX Configuration

Here is an example NGINX configuration that you can use to reverse proxy to AnythingLLM:

```nginx
# Default server configuration
# Example config for regular setup + SSL + Websockets.
server {
	listen 80;
	server_name your-domain.com;
	return 301 https://your-domain.com$request_uri;
}
 
server {
	listen 443 ssl;
	ssl on;
	server_name your-domain.com;
	ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem; 
 
  # Enable websocket connections for agent protocol.
	location ~* ^/api/agent-invocation/(.*) {
		proxy_pass http://localhost:3001;
		proxy_http_version 1.1;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "Upgrade";
	}
 
	# Enable a custom 502 error page.
	# Must define template at /usr/share/nginx/html/502.html
	# error_page 502 /502.html;
    # location /502.html {
    #   index 502.html;
    # }
 
	location / {
		proxy_connect_timeout       605;
    proxy_send_timeout          605;
    proxy_read_timeout          605;
    send_timeout                605;
    keepalive_timeout           605;
    proxy_buffering off;
    proxy_cache off;
    proxy_pass         http://your-server-ip:3001$request_uri;
  }
}
```