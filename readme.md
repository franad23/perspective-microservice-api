### npm: https://www.npmjs.com/package/perspective-api-client

This repository contains a simple Node.js server that uses the Perspective API to analyze text and return a JSON response.

## .env example

```
  PORT=
  API_KEY_PERSPECTIVE=
  TOKEN=
```
The APIKEY you can get it from [here](https://developers.perspectiveapi.com/s/docs-enable-the-api?language=en_US) and this projects has a middleware to check the token and if it's valid it will return the response, it's important to add the token to the header of the request.

## How to run the server

```
npm install
npm run dev
```
