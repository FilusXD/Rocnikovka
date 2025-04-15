var createError = require('http-errors');
var express = require('express');
const port = 4000;
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
mongoose
.connect(`mongodb+srv://admin:adminadmin@cluster0.sz0r6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const multer = require('multer');
const { error } = require('console');
var app = express();
const Users = require('./models/users');
const Product = require('./models/products');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// image storage engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

// upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

// 


app.listen(port,(error)=>{
  if (!error) {
    console.log("Server is running on Port " +port)
  }else{
    console.log("Error " +error)
  }
})


//Endpoint for registering the user
app.post('/signup', async (req,res) =>{

  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false, errors:"email already used by another user"})
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i]=0;
    
  }
  const user = new Users({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
    cartData:cart
  })

  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }

  const token = jwt.sign(data,'secret_ecom');
  res.json({success:true,token})
})

//endpoint for user login
app.post('/login', async (req,res)=>{
  let user = await Users.findOne({email:req.body.email});
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom');
      res.json({success:true,token});
    }
    else{
      res.json({success:false,errors:"Wrong password"});
    }
  }
  else{
    res.json({success:false,errors:"Wrong email"});
  }
})

// endpoint for new collections data
app.get('/newcollections', async (req,res)=>{
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  res.send(newcollection);
})

// endpoint for popular section
app.get('/popular', async (req,res) =>{
  let products = await Product.find({category:"games"});
  let popular_new_releases = products.slice(0,4);
  res.send(popular_new_releases);
})

// middleware to fetch user
const fetchUser = async (req,res,next)=>{
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({errors:"Please authenticate using valid token"})
  }
  else{
    try {
      const data = jwt.verify(token,'secret_ecom');
      req.user = data.user;
      next();
    } catch (error) {
      res.status(401).send({errors:"Please authenticate using valid token"})
    }
  }
}

//endpoint for adding products in cart
app.post('/addtocart',fetchUser, async (req,res)=>{
  console.log("added",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Added")
})

// remove product from cart
app.post('/removefromcart',fetchUser, async (req,res)=>{
  console.log("removed",req.body.itemId);
  let userData = await Users.findOne({_id:req.user.id});
  if(userData.cartData[req.body.itemId]>0)
  userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
  res.send("Removed")
}
)

//endpoint to get cart data
app.post('/getcart',fetchUser,async (req,res)=>{
  console.log("GetCart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
