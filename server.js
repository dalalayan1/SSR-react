const express = require('express');
const app = express();
const open = require('open');
const  funcSSR = require('./dist/SSR-bundle.js');

app.get('/',funcSSR.default);

const port = 3005;

app.listen(port);
console.log(`App listening on port ${port}`);

open(`http://localhost:${port}`);