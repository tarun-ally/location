const express=require("express");
const cors=require("cors");
const app=express();
const db=require("./app/models/index.js");
require('dotenv').config()

app.use(cors());
// app.use(express.json());


app.get("/",(req,res) => {
    console.log(process.env.MONGODB_URI)
    res.send('Hello World....')
})

app.get("/api/tutorials",(req,res) => {
    res.json([{
        location: ["Tarun"],
        state: "AZ",
    }])
})
db.mongoose.connect("mongodb+srv://tarundev:<Sonu123@>@sakshi.6izpuup.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
})
    .catch(err => {
        console.log("Cannot connect to the database |",err);
        process.exit();
    });

// require("./app/routes/tutorial.routes")(app);

// const PORT=process.env.PORT||8080;
// console.log(process.env.PORT)

app.listen(80,() => {
    console.log(process.env)
    console.log(`server is running on port${80}.`);
})




// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKITqGZCf6zIx2JxpEvU+h7nus+Cb9xImX29/hCQ4WYt tarundev101 @gmail.com
