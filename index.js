const express=require("express");
const cors=require("cors");
const app=express();
// const db=require("./app/models");
const path=require("path")
require("dotenv").config();
const mongoose=require("mongoose");
var bodyParser=require('body-parser')
const PORT=process.env.PORT||8080;

var corsOptions={
    origin: "*"
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const connectionParams={
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}


mongoose.connect(process.env.MONGODB_URI,connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch(err => {
        console.log("Cannot connect to the database |",err);
        process.exit();
    });

require("./app/routes/tutorial.routes")(app);

app.listen(PORT,() => {
    console.log(`server is running on port${PORT}.`);
})


// // ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKITqGZCf6zIx2JxpEvU+h7nus+Cb9xImX29/hCQ4WYt tarundev101 @gmail.com
