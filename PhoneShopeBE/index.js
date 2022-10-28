import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
import mongoose from 'mongoose';

const connection_string =
  "mongodb+srv://admin:1111@cluster0.i2eye5b.mongodb.net/test";

mongoose.connect(connection_string,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

const app = express();

app.use(express.json());
app.use(cors())

const PORT = 5000;

app.listen(PORT || 3000, () => {
  console.log(`server iss running on port ${PORT}`);
});

database.on("error", (error) => {
  console.log(error);
});



database.on("connected", () => {
  console.log("database Connected");
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


routes(app);
