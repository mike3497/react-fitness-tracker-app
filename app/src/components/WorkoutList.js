import React, { useEffect, useState } from 'react';
import './WorkoutList.css';
import WorkoutListItem from './WorkoutListItem';
import axios from 'axios';

function WorkoutList() {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:8080/api/workouts').then((response) => {
			setWorkouts(response.data.result);
		});
	}, []);

	return (
		<div>
			{workouts.map((workout) => (
				<WorkoutListItem key={workout._id} workout={workout} />
			))}
		</div>
	);
}

export default WorkoutList;
