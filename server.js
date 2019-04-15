
const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        const pathname = url.parse(request.url).pathname;
        console.log(`request for ${pathname} received`);
        const content = route(handle, pathname);
        console.log('content', content);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(content);
        response.end();

       
    }
    http.createServer(onRequest).listen(8888);

console.log('server has started');
}
exports.start = start;
