# Authenticate It!

## Learning Objectives

Today we'll implement two modes of authentication: session-based authentication and token-based authentication. For an in-depth refresher of the two of them, you can check out this [video](https://www.youtube.com/watch?v=2PPSXonhIck). Here is another shorter video explaining the [basics of JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM).

The client side as well as most of the server is already set up for you -- you only need the implement the middleware in the requests to make sure the client is authenticated (is indeed who they say the are) and authorized (has the permissions to) to view certain pages.

## Getting Started

## Requirements

Implement the exercise so that it's working with

## Extra Credit

- Start implementing authentication (session-based or JWT) to your Netflix React exercise. Remember to hash your passwords (you can use bcrypt) before you store them.
- Try implementing [OAuth 2.0](https://www.varonis.com/blog/what-is-oauth/) with any strategy (Facebook, Google, Twitter, Instagram, etc) for this exercise. You can use [Passport.js](http://www.passportjs.org/) to make things a little simpler. The official docs can be unhelpfully cryptic at times, so you can check [these docs](https://github.com/jwalton/passport-api-docs) for reference.

// First is to server-side render everything with a framework like Next.js. This framework is used by a ton of large enterprise companies because of the search engine friendliness of SSR pages. In your scenario though, it would solve your problem of showing content only when someone is authorized.

// However, in most React.js apps, your data is coming from a data source such as MongoDB that is hidden behind your backend. The only code/information an unauthorized user would be able to see in your JS is the general layout of pages.
