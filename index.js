const express=require("express");
const cors=require("cors");
const app=express();
// const db=require("./app/models");
const path=require("path")
require("dotenv").config();
const mongoose=require("mongoose");
var bodyParser=require('body-parser')
const url=`mongodb+srv://tarundev:Sonu123@sakshi.6izpuup.mongodb.net/?retryWrites=true&w=majority`;
const PORT=process.env.PORT||8080;

var corsOptions={
    origin: `${PORT}`
};
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.resolve(__dirname,"./client"/"build")))
// app.use(...);
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

// app.get("/test",(req,res) => {
//     res.json({message: "welcome..."});
// });
require("./app/routes/tutorial.routes")(app);
// app.get("*",(req,res) => {
//     res.sendFile(path.join(__dirname,"client","build","index.html"));
// })
// if(process.env.NODE_ENV=="production") {
//     app.use(express.static("client/build"));
//     app.get("*",(req,res) => {
//         res.sendFile(path.join(__dirname,"client","build","index.html"));
//     })
// }
app.listen(PORT,() => {
    console.log(`server is running on port${PORT}.`);
})

// http://localhost:8080/api/tutorials

// const {MongoClient}=require("mongodb");
// const connectionString=process.env.MONGODB_URI;
// const express=require("express");
// const cors=require("cors");
// const app=express();
// // const db=require("./app/models/index.js");
// require('dotenv').config()

// // app.use(cors());
// // app.use(express.json());

// const client=new MongoClient(connectionString,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// // let dbConnection;
// // module.exports={
// //     connectToSever: function(callback) {
// //         client.connect(function(err,db) {
// //             if(err||!db) {
// //                 return callback(err);
// //             }
// //             // sample_airbnb is name of database
// //             dbConnection=db.db("sample_airbnb");
// //             // console.log('');
// //             console.log("connected to MongoDb database");
// //             return callback();

// //         });
// //     },
// //     getDb: function() {
// //         return dbConnection;
// //     }
// // }
// // .then(() => {
// // })
// //     .catch(err => {
// //         console.log("Cannot connect to the database |",err);
// //         process.exit();
// //     });

// app.get("/",(req,res) => {
//     // console.log(process.env.MONGODB_URI)
//     res.send('Hello World....')
// })

// // app.get("/api/tutorials",(req,res) => {
// //     res.json([{
// //         location: ["Tarun"],
// //         state: "AZ",
// //     }])
// // })

// // require("./app/routes/tutorial.routes")(app);

// // const PORT=process.env.PORT||8080;
// // console.log(process.env.PORT)

// app.listen(8080,() => {
//     // console.log(process.env)
//     console.log(`server is running on port${8080}.`);
// })




// // ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKITqGZCf6zIx2JxpEvU+h7nus+Cb9xImX29/hCQ4WYt tarundev101 @gmail.com
