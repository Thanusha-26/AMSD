const express = require('express'); 
const app = express();
const PORT = 3000;


app.get("/",(req,res)=>{
	res.send("This is the root");
});


app.get("/about",(req,res)=>{
	res.send("This is the About page");
});

app.get("/user/:id",(req,res)=>{
	const id = req.params.id;
	res.send(id);
});

app.listen(PORT,()=>{
	console.log("Server Started");
});