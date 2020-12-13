
// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express=require('express');
const bodyParser=require('body-parser');

// Start up an instance of app
const app=express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');

//connect server with browser with no sequrity interruption
//app.use(cors);

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=8000;
const server=app.listen(port,server_callback(port));

function server_callback(port){
    console.log(port);
    console.log(`the server is running on port : ${port}`);
}

//POST data to the server
app.post('/all',postWeather);
function postWeather(req,res){
 /* newEntry={
      Temperature:req.body.Temp,
      Date:req.body.date,
      feelings:req.body.feeling
      
  }*/

  //projectData=newEntry;
  projectData['Temperature']=req.body.Temp;
  console.log(projectData.Temperature);
  projectData['Date']=req.body.date;
  projectData['feelings']=req.body.feeling;
  console.log(projectData);
  res.send(projectData);
  
}

//update UI
app.get('/allData',getWeather);
function getWeather(req,res){

   res.send(projectData);
}
