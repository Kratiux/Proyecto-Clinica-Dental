const express = require('express');
const path = require('path');
 
const app = express(),
        bodyParser = require("body-parser");
let port = 21001;
 
app.use(express.static(__dirname + '/../../../donto-react/build'));
 
app.use(bodyParser.json());
 
app.get('/**', (req, res) => {
        res.sendFile(path.join(__dirname + '/../../../donto-react/build/index.html'));
});
 
app.listen(port, () => {
        console.log(`Server listening on the port::${port}`);
});