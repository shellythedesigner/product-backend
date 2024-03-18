import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

// ADD CONNECTION TO MONGODB
if (
  process.env.DATABASE == undefined ||
  process.env.DATABASE_PASSWORD === undefined
) {
  throw new Error("DATABASE environment variable(s) not set");
}

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

void mongoose.connect(DB);

mongoose.connection
  .on("open", () => {
    console.log("connected to mongo");
  })
  .on("close", () => {
    console.log("disconnected from mongo");
  })
  .on("error", (error) => {
    console.log("connection failed", error);
  });

// START THE SERVER
const PORT: string | number = process.env.PORT ?? 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});



// app.delete("/todos/:id", (req, res) => {
//   const { id } = req.params;
//   // Convert the id from string to number for comparison
//   const todoId = parseInt(id, 10);
 
//   // Find the index of the todo with the matching id
//   const index = todos.findIndex(t => t.id === todoId);
 
//   if (index !== -1) {
//      todos.splice(index, 1);
//      res.status(200).send({ message: 'Deleted Successfully', todos: todos });
//   } else {
//      res.status(404).send({ message: 'Todo not found' });
//   }
//  });
 