# ONIS-News-API

## Description

ONIS Solutions Code Challenge Backend

-   A JavaScript application that shows the latest news world-wide, using the [newsapi.org](https://newsapi.org) service.
-   It should be able to see the latest news. The user should have the ability to filter by keywords

## Initial Configuration

Have **Node.js v16** installed. It is possible to install it from the [official site](https://nodejs.org/es/).
It is also wise to consider using [nvm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to manage different versions of Node.js for different projects.

Clone this repository (if you haven't done it already)

In the root directory of the repository, install the NPM dependencies:

```shell script
$ npm i
```

**IMPORTANT:** Be sure to have a `.env` file with the correct credentials. You can copy `.env.example` and chenge the values.

If all the installation and configuration is valid, you will be able to launch the Node.js app without errors.

```shell script
$ npm start
```

To validate, perform a GET to the following routes and check the responses:

1. http://localhost:8080

    ```json
    { "message": "Hello world! ONIS-News-API is alive!" }
    ```

2. http://localhost:8080/api-docs/
    ```
    Swagger Documentation
    ```

### NPM Scripts

```
# "Linting" Code
npm run lint

# Run Server with Nodemon
npm run dev
```
