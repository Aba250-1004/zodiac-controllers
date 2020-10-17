const express = require('express');
const router = express.Router()

router.get('/capricorn', (req, res)=>{
    res.render('earth/capricorn.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/taurus', (req, res)=>{
    res.render('earth/taurus.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/virgo', (req, res)=>{
    res.render('earth/virgo.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})


module.exports = router;