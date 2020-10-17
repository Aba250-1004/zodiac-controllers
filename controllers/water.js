const express = require('express');
const router = express.Router()

router.get('/cancer', (req, res)=>{
    res.render('water/cancer.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/pisces', (req, res)=>{
    res.render('water/pisces.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/scorpio', (req, res)=>{
    res.render('water/scorpio.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})


module.exports = router;