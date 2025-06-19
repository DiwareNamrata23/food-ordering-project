import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())   // request from frontend for backend will be parsed from this
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
    const origin = req.headers.origin;
  
    if (allowedOrigins.includes(origin)) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
    }
  
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, token');
  
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    next();
  });
  
// ✅ Optional: Handle preflight requests for all routes

  

 // can access backend from frontend

// db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res)=>{  // http method -> we can request data from server
    res.send("API working")
})    

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
    
})

// mongodb+srv://Sania:$ania0309@cluster0.dee3fpy.mongodb.net/?