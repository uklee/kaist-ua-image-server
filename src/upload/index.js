const Router = require('koa-router');
const multer = require('@koa/multer');
const path = require('path');
const imgpath = require('../utils/imgdirpath');
const admin = require('../utils/admin');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgpath);
    },
    filename: (req, file, cb) => {
        /*
            Set Destination Image Name HERE
            Example 1 (by LJU). cb(null, file.originalname);
            Example 2 (by LJU). const ext = path.extname(file.originalname);
                                cb(null, ( path.basename(file.originalname, ext) + '_' + Date.now() + ext ));
        */
        const date = new Date( Date.now() );
        const datestr = ( String( date.getFullYear() ).padStart(4, '0')
                        + String( date.getMonth() + 1 ).padStart(2, '0')
                        + String( date.getDate() ).padStart(2, '0')
                        + String( date.getHours() ).padStart(2, '0')
                        + String( date.getMinutes() ).padStart(2, '0')
                        + String( date.getSeconds() ).padStart(2, '0')
                        );
        const ext = path.extname(file.originalname);
        cb(null, ( path.basename(file.originalname, ext) + '_' + datestr + ext ));
    }
});


const router = new Router();
const upload = multer({ storage: storage });



router.post('/', admin.check, upload.single('image'), (ctx, next) => {

    const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = ctx.request.file

    console.log('Image Successfully Uploaded.');
    console.log('Field Name: ', fieldname);
    console.log('Uploaded File Name: ', originalname);
    console.log('Encoding Type: ', encoding);
    console.log('MIME Type: ', mimetype);
    console.log('Destination Folder: ', destination);
    console.log('Destination File Name: ', filename);
    console.log('Destination Full Path: ', path);
    console.log('Byte: ', size);

    ctx.body = {ok: true, msg: 'Image Successfully Uploaded.', path: `/view/${filename}`};

    console.log('== Image Upload END ==')
    console.log();

});



module.exports = router;
