

const mongoose = require("mongoose");
const Schema = new mongoose.Schema({

    imgMetadata: {type:String, required:true},
    userName: {type:String, required:true}

}, {timestamps:true});

Schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

module.exports = mongoose.model("images", Schema);