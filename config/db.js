// const mongoose = require("mongoose");
// const config = require("config");
// // const db = config.get("mongoURI");
// mongoose.connect("mongodb://localhost/devlist");

// const connectDB = async () => {
//   try {
// await mongoose.connect(db, {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// // });

//     console.log("MongoDB Connected....");
//   } catch (err) {
//     console.error(err.message);
//     // Exit process with failure
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/devlist", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.connection
  .once("open", function () {
    console.log("MongoDB Connected...");
  })
  .on("error", function (error) {
    console.log("connection error", error);
  });
