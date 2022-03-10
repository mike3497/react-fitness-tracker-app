import React from 'react';
import './WorkoutList.css';
import WorkoutListItem from './WorkoutListItem';

function WorkoutList() {
	const workouts = [
		{
			_id: 1,
			startTime: '3/9/2020',
			totalTime: '30:59',
			inProgress: true,
		},
		{
			_id: 2,
			startTime: '3/9/2020',
			totalTime: '30:59',
			inProgress: false,
		},
		{
			_id: 3,
			startTime: '3/9/2020',
			totalTime: '30:59',
			inProgress: false,
		},
	];

	return (
		<div>
			{workouts.map((workout) => (
				<WorkoutListItem key={workout._id} workout={workout} />
			))}
		</div>
	);
}

export default WorkoutList;
