require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
	console.log(`Fitness Tracker API listening on port ${port}`);
});

mongoose
	.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
	.then(() => {
		console.log('Connected to MongoDB.');
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB.');
	});

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/api/exercises', require('./routes/exercise.route'));
app.use(
	'/api/exercise-categories',
	require('./routes/exercise-category.route')
);
app.use('/api/workouts', require('./routes/workout.route'));
app.use('/api/workout-line-items', require('./routes/workout-line-item.route'));
