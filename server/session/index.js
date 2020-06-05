const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3001;
// const SECRET = process.env.SECRET || 'this is not very secure';
const router = require('./router');

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(
  session({
    // the store property, if not specified, defaults to the in-memory store
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: 'alalal',
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      // we would want to set it true in a production environment
      secure: false,
    },
  })
);
app.use(router);

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`);
  } else {
    console.log(`🚀 Server is listening on port ${SERVER_PORT}!`);
  }
});
