import express from 'express';
import path from 'path';
import opn from 'opn';
import chalk from 'chalk';

const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        opn('http://localhost:' + port);
    }
});

console.log(chalk.blueBright("started the express server"));