const express = require('express');
const cors = require('cors');
const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3001;
const router = require('./router');

const corsConfig = {
  // REMOVE-START
  origin: 'http://localhost:3000',
  credentials: true,
  // REMOVE-END
};

app.use(cors(corsConfig));
app.use(express.json());
app.use(router);
app.get('*', (req, res) => {
  res.status(404).send('Sorry, not found 😞');
});

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`);
  } else {
    console.log(`🚀 Server (JWT) is listening on port ${SERVER_PORT}!`);
  }
});
