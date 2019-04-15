function route(handle, pathname){
    console.log('routing you to', pathname);
    console.log('handle', handle);
    console.log('pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log('404 no reqeust handler found for', pathname);
    }
}

exports.route = route;

