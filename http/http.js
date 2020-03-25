const http = require('http');

var server = http.createServer(function (serverRequest, serverResponse) {
    serverResponse.writeHead(200, {
        "Content-Type": "text/html;charset=UTF-8"
    });
    serverResponse.write('<h1 style="text-align:center">NodeJS HTTP</h1>')
})
server.listen(2020); 