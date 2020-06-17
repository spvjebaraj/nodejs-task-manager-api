// CRUD Operations

const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne({ name: "Jebaraj" }, (error, user) => {
    // db.collection("users").findOne(
    //   { _id: new ObjectID("5ece907013beae33f1d8ea06") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch user");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 37 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 37 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectID("5ece8d7b1b82db33e3f43e7c") },
    //   (error, task) => {
    //     if (error) {
    //       console.log("Unable to fetch task");
    //     }

    //     console.log(task);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       console.log("Unable to fetch tasks");
    //     }

    //     console.log(tasks);
    //   });
  }
);
