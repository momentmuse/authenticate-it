const express = require('express');
const cors = require('cors');
const auth = require('./middlewares/auth.js');

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const router = require('./router');

app.use(cors());
app.use(express.json());
// app.use(auth);
app.use(router);

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`);
  } else {
    console.log(`🚀 Server is listening on port ${SERVER_PORT}!`);
  }
});
