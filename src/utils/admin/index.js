
/*
    Administrative Request should have following in the Request Header
    Key: process.env.ADMIN_KEY
*/
exports.check = (ctx, next) => {
    
    if (ctx.request.header.key === process.env.ADMIN_KEY) {

        console.log('Administrator Validation Success.');

        return next();

    }
    
    else {

        console.log('Administrator Validation Fail!!');
        console.log(`Given admin-key: ${ctx.request.header.key}`);

        console.log('-- Request Terminated by Adminitrator Validation --');
        console.log();

        ctx.throw(403);

        return;

    }

};
