# CSV-Manager

The CSV manager is a Python/React based web application that manages CSV files. Deployed with Docker.

To run this application from source, please follow the following steps:

_Note: To build this application, the local machine must have npm (Node Package Manager), Docker and docker-compose installed._

1. Clone this repository with `git clone https://github.com/marknoone/CSV-Manager.git`.
2. Go to the project root directory with your terminal.
3. Change directory to the React web client `cd web-client`.
4. Install all dependencies with `yarn install`.
    * _Note: If yarn is not installed on your machine it can be done so with `npm install -g yarn`_
5. Build the React web app with `npm run build`.
6. Return to the project root directory `cd ..`.
7. Build the Docker image using `docker build --no-cache .`.
8. Run the docker image using `docker-compose up`.
