const express=require("express");
const mainRoutes= require('./src/routes/mainRoutes')

const app= express();

app.use(express.static('public'))

app.listen(3114, ()=>
console.log("Servidor andando"))

app.set("view engine", "ejs")

app.use('/', mainRoutes)
app.use('/detalleMenu/:id', mainRoutes)
