const express =require("express");
const ErrorMiddleware =require("./middleware/error");
const cors = require("cors");
const app=express();

// -----for Json to pass as argument----
app.use(express.json());
app.use(cors());

//-----Middleware----
// app.use((req,res,next)=>{
//   console.log(`${req.method} ${req.originalUrl}`);
//   next();
// })

// -----Route Import------
const candidateRoute=require("./routes/candidateRoute");
const userRoute=require("./routes/UserRoute");
const formRoute=require("./routes/formRoute");

// -----Routes-----(v1-> version1)
app.use('/v1',candidateRoute);
app.use('/v1',userRoute);
app.use('/v1',formRoute);

    
// ----- Middleware Error Handling---
app.use(ErrorMiddleware);

module.exports=app;