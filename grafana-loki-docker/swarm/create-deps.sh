docker network create \
  --driver=overlay \
  monitoring

docker build -t fnobre11/log-api -f ./api/Dockerfile --build-arg PORT=3001 --build-arg APP_NAME=generate-logs-api ./api
