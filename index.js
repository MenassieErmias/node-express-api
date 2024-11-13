import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (request, response) => {
  console.log('TEST');
  response.send('Hello from homepage!')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));