# mongo-action

[![GitHub Actions status](https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg)](https://github.com/DigiPie/mongo-action/actions) [![GitHub Releases](https://img.shields.io/github/release/DigiPie/mongo-action.svg)](https://github.com/DigiPie/mongo-action/releases)

**mongo-action** is a Github Action which creates a mongo Docker container using the official [Dockerhub image](https://hub.docker.com/_/mongo). The MongoDB instance's port will be exposed to other containers and also to the host running the Github Workflow.

## Inputs

### `image_version`

**Optional:** The `mongo` Docker image version to use. Default: `"latest"`. Refer to the official [Dockerhub image page](https://hub.docker.com/_/mongo).

### `port`

**Optional:** The `mongo` port to use. Default: `27017`.

## Example usage

```yaml
name: mongo-action CI
on: [push]

jobs:
  test_mongo_action:
    runs-on: ubuntu-latest
    name: Test mongo-action
    steps:
      - name: Install mongosh
        run: |
          sudo apt-get update
          sudo apt-get install -y wget gnupg
          wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
          echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
          sudo apt-get update
          sudo apt-get install -y mongodb-mongosh
      - name: Create mongo Docker container
        uses: DigiPie/mongo-action@v2.0.0
        with:
          image_version: latest
          port: 27017
      - name: Test mongo connection
        run: "sudo mongosh localhost:27017"
```

## Example usage with NodeJS-ExpressJS

Visit [DigiPie/mocha-chai-mongoose](https://github.com/DigiPie/mocha-chai-mongoose) for an example of how you can use **mongo-action** with **Mocha** and **Chai** to perform automated API testing for a **Node-ExpressJS-Mongoose** app.
