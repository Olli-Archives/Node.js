function route(handle, pathname, response, postData){
    console.log('routing you to', pathname);
    console.log('handle', handle);
    console.log('pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, postData);
    }else{
        console.log('404 no reqeust handler found for', pathname);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;

