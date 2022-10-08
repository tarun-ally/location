const express=require("express");
const cors=require("cors");
const app=express();
const db=require("./app/models");
const path=require("path")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(...);
db.mongoose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected to database");
})
    .catch(err => {
        console.log("Cannot connect to the database |",err);
        process.exit();
    });

require("./app/routes/tutorial.routes")(app);

const PORT=process.env.PORT||8080;

app.listen(PORT,() => {
    console.log(`server is running on port${PORT}.`);
})




// ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKITqGZCf6zIx2JxpEvU+h7nus+Cb9xImX29/hCQ4WYt tarundev101 @gmail.com
