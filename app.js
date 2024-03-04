const express = require('express');
const app = express();

app.use(express.json()); // Corrected: Added parentheses

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});
app.get('/', (request, response) => {
    console.log("the first runn1");
    response.send({ "body": "hi bro1", "tail": "hi bro2" });
})
app.get('/status', (request, response) => {
    const status = {
        'Status': 'Running'
    };
    console.log("request happened");
    response.send(status);
});
