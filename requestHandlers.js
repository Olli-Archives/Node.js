let querystring = require(`querystring`),
    fs = require('fs');


function start(response, postData) {
    console.log('request handler start was calleld')
    const body = /*html*/ `
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html" charset=UTF-8 />
    </head>
    <body> 
    <form action="/upload" method ="post">
    <textarea name="text" rows="20" cols="60"></textarea>
    <input type="submit" vlaue="Submit text" />
    </form>
    </body>
    </html>
    `;


    response.writeHead(200, { 'Content-Type': 'text/html' });
    console.log('going to write the body');
    response.write(body);
    response.end();

}

function upload(response, postData) {
    console.log('request handler uplload was called');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(querystring.parse(postData).text);
    response.end();
}

function show(response){
    console.log('request handler show was called');
    response.writeHead(200, {'Content-Type': 'img/png'});
    fs.createReadStream('/tmp/test.png').pipe(response);

}


exports.start = start;
exports.upload = upload;