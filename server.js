const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
mongoose.connect("mongodb+srv://abdullahdaniyal:superflies1234@cluster0.s5b7diq.mongodb.net/Lab07", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,

  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
