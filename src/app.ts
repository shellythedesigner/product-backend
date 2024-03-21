import express from "express";
import todoRouter from "./routes/todoRoutes";
import userRouter from "./routes/userRoutes";
import cors from "cors";

const app = express();

//MIDDLEWARE
app.use(express.json({ limit: "10kb" }));
// Url Encoder, Allows express to parse data being sent from a form
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );

var allowlist = ["http://localhost:5173", "https://my-product-inventory-4g8untwe7-shellythedesigners-projects.vercel.app"];
var corsOptionsDelegate = function (req:any, callback:any) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(cors(corsOptionsDelegate));

// ROUTES
// localhost:8000/todos
app.use("/product", todoRouter);

// localhost:8000/users
app.use("/users", userRouter);

export default app;


