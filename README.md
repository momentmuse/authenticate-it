# Authenticate It! 🔐

## Learning Objectives

Today we'll implement two modes of authentication: session-based authentication and token-based authentication. For an in-depth refresher of the two of them, you can check out this [video](https://www.youtube.com/watch?v=2PPSXonhIck).

This is the master branch, in which you will implement session-based authentication. After you finish this exercise, switch to the json-web-token branch and implement JWT-based authentication. You can come back and do the extra credit if you have time. 😊

## Getting Started

Most of the client side as well as the server is already set up for you. 🚀

On the server side, you will need to implement authentication middleware and the logic for the controllers. It's possible to implement sessions manually, but we recommend using the `express-session` library for this exercise. You should store the user id in the request session so that each authenticated request will have access to the user id through a cookie.

⚠️ Remember to hash your passwords before saving them to your database!

The `/me` and `/logout` routes should be protected by an auth middleware; that is, unauthenticated requests should not be able to query these endpoints. Try using POSTMAN to check requests are working, and once this is set up, you can connect the client requests to the server.

## Requirements

Install dependencies with `npm i` in both the client and server folders. You'll also want to use Nodemon to easily monitor your server. You will also need to have `mongodb` up and running at the default port.

## Extra Credit

- Note that by default, `express-session` saves the session in an in-memory store. This is only approriate for development environments and deployed applications should use session store like `connect-redis` or a separate database. Try to refactor your server to persist sessions in a [session store](https://www.npmjs.com/package/express-session#compatible-session-stores). 🥞
