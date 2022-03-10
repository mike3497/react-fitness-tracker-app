import React, { useContext } from 'react';
import './WorkoutListItem.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';

function WorkoutListItem(props) {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const workout = props.workout;

	const handleGoToWorkout = (e) => {
		const workoutId = e.currentTarget.dataset.workoutId;
		context.changeWorkoutId(workoutId);
	};

	return (
		<div className="workout-list-item">
			<div>
				<h6 className="workout-list-item__date">
					{workout.startTime} Workout
				</h6>
				<p className="workout-list-item__time">Total Time: --:--</p>
			</div>

			{workout.inProgress && (
				<button
					className="workout-list-item__button"
					type="button"
					onClick={handleGoToWorkout}
					data-workout-id={workout._id}
				>
					<i class="fa-solid fa-chevron-right"></i>
				</button>
			)}

			{!workout.inProgress && (
				<button
					className="workout-list-item__button"
					type="button"
					onClick={handleGoToWorkout}
					data-workout-id={workout._id}
				>
					<i class="fa-solid fa-eye"></i>
				</button>
			)}
		</div>
	);
}

export default WorkoutListItem;
