const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.status(200).json({
    message: 'Hello Kumail Rizvi !',
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on 192.168.58.128:${PORT}`);
});
