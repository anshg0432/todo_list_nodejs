const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const todoRoutes = require('./routes/todoRoutes')

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=> {console.log('connected to db');
     app.listen(3000)})
    .catch((err)=> console.log(err));
// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

app.get('/',(req,res)=>{
  res.redirect('/todo-list');
})

app.get('/about',(req,res)=>{
  res.render('about',{title:'About'});
})

app.use('/todo-list',todoRoutes)

app.use((req,res)=>{
  res.render('404',{title:'404'});
})

