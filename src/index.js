import dotenv from "dotenv";
import { connectDB } from "./connect.js";
import { app } from "./app.js";

// dotenv configure
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log("Server Started on =>", process.env.PORT || 6000);
    });
  })
  .catch((err) => {
    console.error("Database connection failure", err);
    process.exit(1);
  });
