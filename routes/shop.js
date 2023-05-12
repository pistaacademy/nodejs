const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    res.send('<h1>Hello from Pista Academy Express Course!</h1>');
});


module.exports = router;