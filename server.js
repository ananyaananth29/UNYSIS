import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import uiRoute from './ui/ui.route';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/resources', express.static(path.join(__dirname, 'public')));
app.use('views', express.static(path.join(__dirname, 'views')));

const mongoUri = 'mongodb://localhost:27017/usersdb';
mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);

app.set('view engine', 'hbs');

app.use("/", uiRoute);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
