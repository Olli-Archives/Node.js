let querystring = require(`querystring`),
    fs = require('fs'),
    formidable = require('formidable');



function start(response) {
    console.log('request handler start was calleld')
    const body = /*html*/ `
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html" charset=UTF-8 />
    </head>
    <body> 
    <form action="/upload" encytype ="multipart/form-data" method="post">
    <input type="file" name="upload" multiple="multiple" />
    <input type="submit" value="Upload file" />
    </form>
    </body>
    </html>
    `;


    response.writeHead(200, { 'Content-Type': 'text/html' });
    console.log('going to write the body');
    response.write(body);
    response.end();

}

function upload(response, prequest) {
    console.log('request handler uplload was called');

    let form = new formidable.IncomingForm();
    console.log('aboutto parse');
    form.parse(request, (error, fields, files) => {
        console.log('parsin done');
        fs.rename(files.upload.path, '/tmp/test.png', (error) => {
            if (error) {
                fs.unlink('/tmp/test.png');
                fs.rename(files.upload.path, './tmp/test.png');
            }
        });
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('received image:<br/>');
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    console.log('request handler show was called');
    response.writeHead(200, { 'Content-Type': 'img/png' });
    fs.createReadStream('./tmp/test.png').pipe(response);

}


exports.start = start;
exports.upload = upload;
exports.show = show;