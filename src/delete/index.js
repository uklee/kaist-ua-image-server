const Router = require('koa-router');
const path = require('path');
const imgpath = require('../utils/imgdirpath');
const admin = require('../utils/admin');
const fs = require('fs');


const router = new Router();



router.delete('/:img', admin.check, (ctx) => {
    
    try {

        fs.unlinkSync(path.join(imgpath, ctx.params.img));
        
        ctx.body = { ok: true, msg: 'Image Successfully Deleted.' };

    } catch (err) {

        console.log('Image Deletion Fail!!');
        console.log(`Request Image: ${ctx.params.img}`);
        console.log('-- Error Detail --');
        console.log(err);
        console.log('------------------');

        ctx.status = 404;
        
    };
    

    console.log('== Image Deletion END ==')
    console.log();

});



module.exports = router;
