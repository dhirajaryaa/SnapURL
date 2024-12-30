import express from "express";
import cors from "cors"

export const  app = express();

// setup middleware 
app.use(express.json());

app.use(cors())