import dotenv from 'dotenv';
dotenv.config();


// Imports the Express framework, used to create the web server.
// Imports the CORS middleware to handle Cross-Origin Resource Sharing.
import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import { dbConnect } from './configs/database.config';

dbConnect()
const app = express();
app.use(express.json())
//Applies the CORS middleware to allow requests from the specified origin (http://localhost:4200) with credentials
app.use(cors({
    credentials: true,
    // origin: ["http://localhost:4200"]
    origin: ["http://localhost:59708"]

}));

app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)

//Setting the Port and Starting the Server:
const port = 5000;
app.listen(port, () => {
    console.log("Website serve on http://localhost:" + port)
})