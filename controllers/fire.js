const express = require('express');
const router = express.Router()

router.get('/aries', (req, res)=>{
    res.render('fire/aries.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/leo', (req, res)=>{
    res.render('fire/leo.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/sagittarius', (req, res)=>{
    res.render('fire/sagittarius.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})


module.exports = router;