# Grafana Loki with Docker (WIP)

This is a simple example of how to use [Grafana Loki](https://grafana.com/oss/loki/) with Docker.


## Prerequisites

Install the loki docker driver:

```bash
docker plugin install grafana/loki-docker-driver:latest --alias loki --grant-all-permissions
```

> note: The Docker plugin must be installed on each Docker host that will be running containers you want to collect logs from.

> important: The plugin can be accessed by host mode.

For more information, see [Docker plugin](https://grafana.com/docs/loki/latest/clients/docker-driver/configuration/).