const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer(function(request, response) {
    switch(request.url){
        case "/":
            fs.readFile('pages/index.html', function(error, data) {
                if(error){
                    response.writeHead(200);
                    response.write('Error: File Not Found');
                }else{
                    response.write(data)
                }
                response.end();
            })
        break
        case "/about":
            fs.readFile('pages/about.html', function(error, data) {
                if(error){
                    response.writeHead(200);
                    response.write('Error: File Not Found');
                }else{
                    response.write(data)
                }
                response.end();
            })
        break
        case "/contact":
            fs.readFile('pages/contact.html', function(error, data) {
                if(error){
                    response.writeHead(200);
                    response.write('Error: File Not Found');
                }else{
                    response.write(data)
                }
                response.end();
            })
        break
        default:
            fs.readFile('pages/error.html', function(error, data) {
                if(error){
                    response.writeHead(404);
                    response.write('Error: File Not Found');
                }else{
                    response.write(data)
                }
                response.end();
            })
        break
    }
});
server.listen(port, function(error) {
    if(error){
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});