import  express from 'express'
import dotEnv from 'dotenv'
import mongoose from 'mongoose'

const  app = express();
import cors from'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'


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

// Running server   create function  on Port 
const PORT = process.env.PORT || 4000

// mongoose with database connected 
// mongoose
//   .connect(process.env.DB_URL, {
//     useNewUrlParser:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

const connect = async () => {
    try {
      await mongoose.connect(process.env.DB_URL);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


  app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
  });