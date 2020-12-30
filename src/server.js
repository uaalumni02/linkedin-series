import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();

const { log, error } = console;

mongoose.Promise = global.Promise;

const port = process.env.PORT || 3000;

const router = express.Router();

//import routes
import shoeRoutes from "./routes/shoe.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const DB_URL = process.env.MONGO_URL;
const TEST_DB_URL = process.env.MONGO_TEST_URL;

if (process.env.NODE_ENV == "test") {
  mongoose.connect(TEST_DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) return console.log("Unable to Connect to MongoDB");
    return console.log("Connection Successful to test DB");
  });
} else {
  mongoose.connect(DB_URL, { useNewUrlParser: true }, (err) => {
    if (err) return console.log("Unable to Connect to MongoDB");
    return console.log("Connection Successful to database");
  });
}

router.use("/shoe", shoeRoutes);

app.use("/api", router);

app.listen(port, () => log("server is running"));
