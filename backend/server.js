import  express from 'express'
import dotEnv from 'dotenv'
import mongoose from 'mongoose'

const  app = express();
import cors from'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


import authRoute  from "./routes/auth.js";
import usersRoute from "./routes/user.js"
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";


app.get('/',(req,res)=>{
    res.send('server is running')
})


// env  file call function  
dotEnv.config({
    path : 'backend/config/config.env'
})

//use middleware-------------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});



// api route declaire 
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);




// Running server   create function  on Port 
const PORT = process.env.PORT || 5000

const uri = "mongodb://0.0.0.0:27017/booking";

// mongoose with database connected 
mongoose
  .connect(uri, {
    useNewUrlParser:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running port  ${PORT}`);
    }
})

