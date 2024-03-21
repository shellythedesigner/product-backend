import express from "express";
import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
import cors from "cors";

const app = express();

//MIDDLEWARE
app.use(express.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


// ROUTES
// localhost:8000/todos
app.use("/product", todoRouter);

// localhost:8000/users
app.use("/users", userRouter);

export default app;


