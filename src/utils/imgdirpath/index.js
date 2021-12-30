const path = require('path');


const rootdir = path.join(__dirname, '../../../');
const imgdir  = path.resolve(rootdir, process.env.IMG_PATH);


/*
    Usage:
    Get absolute image directory path from process.env.IMG_PATH
*/
module.exports = imgdir;
