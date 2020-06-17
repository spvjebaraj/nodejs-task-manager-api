const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// middleware example
// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check back soon!");
// });

// upload file example
// const multer = require("multer");
// const upload = multer({
//   dest: "images",
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, callback) {
//     // callback(new Error("File must be a PDF"));
//     // callback(undefined, true);
//     // callback(undefined, false);
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return callback(new Error("Please upload a Word document"));
//     }

//     callback(undefined, true);
//   },
// });

// app.post(
//   "/upload",
//   upload.single("upload"),
//   (req, res) => {
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//   // const task = await Task.findById("5ee9012f47a7ff2a42227770");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5ee9006c1ee4522a13377e9b");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };

// main();
