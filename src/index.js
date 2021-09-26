
//Use path dependency
const path=require('path');

//
const handlebars  = require('express-handlebars');

//Morgan logger request sever
const morgan = require('morgan')

const express = require('express')
const app = express()
const port = 3000

//Configure static files
app.use(express.static(path.join(__dirname,'public')));
console.log(path.join(__dirname),"'ádfg");
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))


app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})