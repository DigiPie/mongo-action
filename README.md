# mongo-action

[![GitHub Actions status](https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg)](https://github.com/DigiPie/mongo-action/actions) [![GitHub Releases](https://img.shields.io/github/release/DigiPie/mongo-action.svg)](https://github.com/DigiPie/mongo-action/releases)

**mongo-action** is a Github Action which creates a mongo Docker container using the official [Dockerhub image](https://hub.docker.com/_/mongo). The MongoDB instance's port will be exposed to other containers and also to the host running the Github Workflow.

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
        uses: DigiPie/mongo-action@v1.0.1
        with:
          image-version: latest
          port: 27017
      - name: Install mongodb-clients
        id: install_mongodb_clients
        run: sudo apt install mongodb-clients
      - name: Test mongo connection
        id: test_mongo_connection
        run: "sudo mongo localhost:27017"
```

## Example usage with NodeJS-ExpressJS

Visit [DigiPie/mocha-chai-mongoose](https://github.com/DigiPie/mocha-chai-mongoose) for an example of how you can use **mongo-action** with **Mocha** and **Chai** to perform automated API testing for a **Node-ExpressJS-Mongoose** app.
