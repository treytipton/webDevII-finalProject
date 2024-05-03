import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(express.json());
app.use(cors());

app.use(bodyParser.json());
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase')
  .then(() => {
      console.log('Connected to database');
      // Start listening to the server only after a successful database connection
      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => {
      console.error('Database connection error', err);
  });


