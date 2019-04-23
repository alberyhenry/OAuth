const express = require('express');
const app = express();
//set up view engine
app.set('view engine', 'ejs');
// set Up port
const port = 3000;

// create home route

app.get('/', (req, res)=>{
  res.render('home');
});

app.listen(port, ()=> {
  console.log(`app now listening for requests on port ${port}`);
});