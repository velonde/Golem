const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const express = require('express');
const figlet = require('figlet');



const app = express();
const PORT = 3000;
const execPromise = promisify(exec);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('output'));
app.use(express.static('temp'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    figlet('Server Booted!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data); 
    });

    console.log(`Server is running on http://localhost:${PORT}`);
});