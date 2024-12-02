const express = require("express");
const userRoutes = require("./routes/User");
const employeeRoutes = require("./routes/Employee");
const mongoose = require("mongoose");
const cors = require('cors');




const DB_CONNECTION_STRING = "mongodb+srv://101015470:NuBrr4mhfg8prAO2@cluster0.l53ef.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error: ", err);
});

const app = express();
const SERVER_PORT = 3001;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", userRoutes);
app.use("/", employeeRoutes);  


app.route("/")
    .get((req, res) => {
        res.send("<h1>MongoDB + Mongoose Example</h1>");
    });


app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
