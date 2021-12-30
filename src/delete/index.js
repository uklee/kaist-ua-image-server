const Router = require('koa-router');
const path = require('path');
const imgpath = require('../utils/imgdirpath');
const admin = require('../utils/admin');
const fs = require('fs');


const router = new Router();



router.delete('/:img', admin.check, async (ctx) => {

    await fs.unlink(path.join(imgpath, ctx.params.img), (err) => {err ?
        () => {console.log('Image Deletion Fail!!'); console.log(`Request Image: ${ctx.params.img}`); console.log(err); ctx.assert(true, 404);}
        :
        () => {ctx.body = { ok: true, msg: 'Image Successfully Deleted.' }; console.log("--response set--")}
    });

    console.log('-- Image Deletion END --')
    console.log();

});



module.exports = router;
