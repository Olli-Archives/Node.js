function route(handle, pathname){
    console.log('routing you to', pathname);
    console.log('handle', handle);
    console.log('pathname', pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname]();
    }else{
        console.log('no reqeust handler found for', pathname);
    }
}

exports.route = route;

