# mongo-action

![mongo-action CI](https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg)

Github action to create a Docker container from the official mongo image. Useful for testing purposes. The MongoDB instance's port will be exposed to host and other containers.

## Inputs

### `image-version`

**Optional:** The `mongo` Docker image version to use. Default: `"latest"`.

### `port`

**Optional:** The `mongo` port to use. Default: `27017`.

## Example usage

```yaml
on: [push]

jobs:
  test_mongo_action:
    runs-on: ubuntu-latest
    name: Test mongo-action
    steps:
      - name: Create mongo Docker container
        id: build_mongo_docker
        uses: DigiPie/mongo-action@v1.0.0
      - name: Install mongodb-clients
        id: install_mongodb_clients
        run: sudo apt install mongodb-clients
      - name: Test mongo connection
        id: test_mongo_connection
        run: "sudo mongo localhost:27017"
```