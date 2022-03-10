import React, { useEffect, useState } from 'react';
import './ExerciseList.css';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';

function ExerciseList() {
	const [exercises, setExercises] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/exercises/getAll')
			.then((response) => {
				setExercises(response.data.result);
			});
	}, []);

	return (
		<div>
			{exercises.map((exercise) => (
				<ExerciseListItem key={exercise._id} exercise={exercise} />
			))}
		</div>
	);
}

export default ExerciseList;
