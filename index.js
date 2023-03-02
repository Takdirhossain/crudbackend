const express = require("express")
const app = express()
const cors = require("cors")
const { default: mongoose } = require("mongoose")
const port = 5000
app.use(cors())
app.use(express.json())
const user = require("./routs/user")

const uri =
    "mongodb+srv://ecommerce:ecommerce@cluster0.eurlfla.mongodb.net/ecommerece?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("databse connect");
    });
app.use("/api/auth", user)

app.listen(port, () => {
    console.log("Server is running")
})