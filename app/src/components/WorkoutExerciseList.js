import React from 'react';
import WorkoutExerciseListItem from './WorkoutExerciseListItem';

function WorkoutExerciseList(props) {
	const workoutExercises = props.workoutExercises;

	return (
		<React.Fragment>
			{workoutExercises
				? workoutExercises.map((workoutExercise) => {
						return (
							<WorkoutExerciseListItem
								key={workoutExercise._id}
								workoutExercise={workoutExercise}
							/>
						);
				  })
				: 'Loading...'}
		</React.Fragment>
	);
}

export default WorkoutExerciseList;
