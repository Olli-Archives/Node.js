

function start() {
    console.log('request handler start was calleld')
    return 'STARTING';
}

function upload() {
    console.log('request handler uplload was called');
    return 'UPLOADDDD';
}


exports.start = start;
exports.upload = upload;