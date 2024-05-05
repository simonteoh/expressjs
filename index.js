const express = require('express')

const app = express();

const port = 5001;

app.get('/', (req, res) => {
    res.send('Started Working, Express!');
    console.log('Started Working, Express!');
});

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});