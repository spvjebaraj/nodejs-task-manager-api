// CRUD Operations

const { MongoClient, ObjectID } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);
console.log(id.id);
console.log(id.toHexString);

MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Jebaraj",
    //     age: 37,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Anitha",
    //       age: 34,
    //     },
    //     {
    //       name: "Jeni",
    //       age: 8,
    //     },
    //   ],
    //   (error, client) => {
    //     if (error) {
    //       return console.log("Unable to insert users");
    //     }

    //     console.log(client.ops);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Learn Node JS",
    //       completed: false,
    //     },
    //     {
    //       description: "Learn Python from Udemy",
    //       completed: true,
    //     },
    //     {
    //       description: "Do Python Project",
    //       completed: false,
    //     },
    //   ],
    //   (error, client) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks");
    //     }

    //     console.log(client.ops);
    //   }
    // );
  }
);
