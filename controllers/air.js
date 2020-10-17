const express = require('express');
const router = express.Router()

router.get('/aquarius', (req, res)=>{
    res.render('air/aquarius.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/gemini', (req, res)=>{
    res.render('air/gemini.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})

router.get('/libra', (req, res)=>{
    res.render('air/libra.ejs', {movies:['Mean Girls 2', 'Bring It On 3']})
})


module.exports = router;