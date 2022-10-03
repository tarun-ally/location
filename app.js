const express=require("express");
const cors=require("cors");
const app=express();
const db=require("./app/models");
const path=require("path")
require("dotenv").config();
var corsOptions={
    // origin: "http://localhost:8081"
    origin: "http://localhost:3000"


};
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"client","build")))
// app.use(...);
db.mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
})
    .catch(err => {
        console.log("Cannot connect to the database |",err);
        process.exit();
    });

app.get("/",(req,res) => {
    res.json({message: "welcome"});
});
require("./app/routes/tutorial.routes")(app);
const PORT=process.env.PORT||8080;
app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"client","build","index.html"));
})
if(process.env.NODE_ENV=="production") {
    app.use(express.static("client/build"));
}
app.listen(PORT,() => {
    console.log(`server is running on port${PORT}.`);
})