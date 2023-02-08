const express = require('express');

const app = express()

app.use(express.static('public'));
app.use(express.static('style'));
app.use(express.static('views'));


app.get('/index', (request, response) => {
    response.sendFile(__dirname + '/views/index.html')
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html')
})

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html')
})

app.get('/galery', (request, response) => {
    response.sendFile(__dirname + '/views/galery.html')
})
app.listen(3000, () => console.log('Server running on port 3000'))