const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello World');
})

const server = app.listen(3000, () => {
    console.log('The server is ready and running at localhost:3000.');
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated.')
    });
});
