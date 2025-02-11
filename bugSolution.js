const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an error
  new Promise((resolve, reject) => {
      reject(new Error('Something went wrong'));
  }).catch(error => {
      console.error('Error during request:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});