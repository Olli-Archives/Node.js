let exec = require('child_process').exec;

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
    response.write(postData);
    response.end();
}


exports.start = start;
exports.upload = upload;