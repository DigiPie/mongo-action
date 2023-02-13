# mongo-action

[![GitHub Actions status](https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg)](https://github.com/DigiPie/mongo-action/actions) [![GitHub Releases](https://img.shields.io/github/release/DigiPie/mongo-action.svg)](https://github.com/DigiPie/mongo-action/releases)

**mongo-action** is a Github Action that creates a Docker container using the official mongo image from [Dockerhub](https://hub.docker.com/_/mongo). 
The MongoDB server port will be published/exposed to the host running the Github Workflow.

## Inputs

### `image_version`

**Optional.** The mongo Docker image version to use. Defaults to `latest`. Refer to the official [Dockerhub image page](https://hub.docker.com/_/mongo).

### `port`

**Optional.** The port where the mongo service will be published at - i.e. `docker run -p ${port}:27017 ...`. Defaults to `27017`. Refer to the official [docker run page](https://docs.docker.com/engine/reference/commandline/run/#publish).

## Example usage with mongosh

```yaml
name: mongo-action CI
on: [push]

jobs:
  test_mongo_action:
    runs-on: ubuntu-latest
    name: Test mongo-action
    steps:
      - name: Create mongo Docker container
        uses: DigiPie/mongo-action@v2.0.1
        with:
          image_version: latest
          port: 27017
      - name: Install mongosh command
        run: |
          sudo apt-get update
          sudo apt-get install -y wget gnupg
          wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
          echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
          sudo apt-get update
          sudo apt-get install -y mongodb-mongosh
      - name: Test mongo connection
        run: "sudo mongosh localhost:27017"
```

## Example usage with NodeJS-ExpressJS

Refer to [DigiPie/mocha-chai-mongoose](https://github.com/DigiPie/mocha-chai-mongoose) for how you could use **mongo-action** with **Mocha** and **Chai** to perform automated API testing for a **NodeJS-ExpressJS-Mongoose** app.
