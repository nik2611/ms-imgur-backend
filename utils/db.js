const mongoose = require("mongoose");

module.exports = async function expmongoose() {
  await mongoose.connect(process.env.CONN)
    .then(() => console.log("database connected"))
    .catch((error) => console.log(error));
};
