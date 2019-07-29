var proxy = require('express-http-proxy');
var app = require('express')();

var port = process.env.PORT || 3000;
var proxyUrl = 'https://localhost:44387';

// fix ssl localhost
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.use('/', proxy(proxyUrl));

console.log(`Node server proxy running on port: ${port}`)
app.listen(port);
