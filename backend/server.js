const express =require('express')
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose')
const Port=process.env.PORT || 5000;
const Routes=require('./routes/cards')
dotenv.config();
const cors = require('cors');

app.use(cors({
    origin:["https://task-management-frontend-hazel-iota.vercel.app"],
    methods:["Post","GET"],
    credentials:true
  }));

mongoose.connect(process.env.URL,{})
.then(()=>console.log('Database is connected'))
.catch(err=>console.log('Connecting with databse',err))

app.use(express.json());
app.use('/api',Routes)


app.get('/',(req,res)=>{
    res.status(201).send('<h1>Server is running !')
})


app.listen(Port,()=>{
    console.log(`Server is running on Port  ${Port}`);
    
})