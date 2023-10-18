// import mongoose
const mongoose = require("mongoose")
// create schema definition object
const schemaDefObj = {
    name: {
        type: String,
        require: true
    },
    dueDate: {
         type: Date
    },
    course: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: "TO DO" // To do, in progress, done
    }
}
// create mongoose schema
const projectSchema = new mongoose.Schema(schemaDefObj)
// export mongoose model
module.exports = mongoose.model("Project", projectSchema)