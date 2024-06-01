const express=require('express')
const app=express()
const port=process.env.PORT || 3500
const CORS=require('cors')
const mongoose = require('mongoose');


app.use(express.json())
app.use(CORS())


async function main() {
  await mongoose.connect('mongodb+srv://monish282003:Bwuud2vDjXOlrngw@recipe-blog.wwmck42.mongodb.net/Recipe-Blog?retryWrites=true&w=majority&appName=Recipe-Blog');
  
app.get('/',(req,res)=>{
    res.send('Hello World')
})
}


main().then(()=>{
    console.log("DB connected")
}).catch(err => console.log(err));


const ItemRoutes=require("./src/route/ItemRoute")
app.use('/api',ItemRoutes)


app.listen(port,()=>{
    console.log(`Listing in port ${port}`)
})