const express=require("express")
const path=require("path")
const hbs=require("hbs")
const app=express()
const port=process.env.PORT || 3000

// template engine
app.set("views",path.join((__dirname,"../templates/views")))
app.set("view engine","hbs")
// partial path
hbs.registerPartials(path.join(__dirname,"../templates/partial"))
// static path
app.use(express.static(path.join(__dirname,"../public")))



app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error404")
})

app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})