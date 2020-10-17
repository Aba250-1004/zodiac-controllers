const express = require('express');
const app = express();
const ejsLayouts = require("express-ejs-layouts")

app.set('view engine','ejs')
app.use(ejsLayouts);

app.get('/', (request,res)=>{
    res.render('home.ejs')
})

app.get('/water', (request,res)=>{
    res.render('water.ejs',{words:['private','mysterious','psychic','charming','emotional','sensitive']})
})

const water = require('./controllers/water')
app.use('/water', water)

app.get('/air', (request,res)=>{
    res.render('air.ejs',{words:['movement','creativity','action','adventure','exciting','easily provoked']})
})

const air = require('./controllers/air')
app.use('/air', air)



app.get('/fire', (request,res)=>{
    res.render('fire.ejs',{words:['passionate','strong emotions','tempermental','energetic','accomplished','interesting']})
})

const fire = require('./controllers/fire')
app.use('/fire', fire)

app.get('/earth', (request,res)=>{
    res.render('earth.ejs',{words:['grounded','helpful','practical','realistic','materialistic','dependable']})
})

const earth = require('./controllers/earth')
app.use('/earth', earth)


app.listen('3000',()=>{
    console.log('yayyyyy')
})