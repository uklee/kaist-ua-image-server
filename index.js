require("dotenv").config();
const Koa = require('koa');
const Router = require('koa-router');
const imgpath = require('./src/utils/imgdirpath');
const imgupload = require('./src/upload');
const imgdelete = require('./src/delete');
const serve = require('koa-static');
const mount = require('koa-mount');


const app = new Koa();
const router = new Router();



/*
    Routing
    /hello/     : FOR DEBUG
    /view/      : Image Retrieval
    /upload/    : Image Upload
    /delete/    : Image Deletion
*/
router.get('/hello', (ctx) => { ctx.body = 'hello'; });
router.use('/upload', imgupload.routes());
router.use('/delete', imgdelete.routes());
app.use(mount('/view', serve(imgpath)));
app.use(router.routes()).use(router.allowedMethods());



// Server Listen
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
    console.log();
});