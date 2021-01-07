# Simple REST API using Node.js

## Used:
* Node.js
    * express
    * body-parser
    * nodemon
    * dotenv
* [MongoDB](https://www.mongodb.com/)
    * mongoose

## To use

1. Clone repository
2. Configure DSN in ```.env```
3. ```npm start```
4. Test endpoints(e.g. using Postman)

## Endpoints:

| Request method | Endpoint        | Parameter                                             |
|----------------|-----------------|-------------------------------------------------------|
| GET            | /posts/         | none                                                  |
| POST           | /posts/         | { "title": "Test title", "description": "Test text" } |
| DELETE         | /posts/{postID} | none                                                  |
| PATCH          | /posts/{postID} | { "title": "New title", }                             |
