docker network create \
  --driver=overlay \
  --subnet=10.6.0.0/16 \
  --gateway=10.6.0.1 \
  monitoring
