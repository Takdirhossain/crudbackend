const mongoose = require("mongoose")
const { Schema } = mongoose

const studentschema = new Schema({
    name: { type: String, require:true },
    address: { type: String, require:true },
    contact: { type: String, require:true },
    pincode: { type: String, require:true }
}, { timestamps: true }

)
module.exports = mongoose.model("Student", studentschema)