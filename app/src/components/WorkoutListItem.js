import React, { useContext } from 'react';
import './WorkoutListItem.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import CircleButton from './ui/CircleButton';
import { COLORS } from '../colors';

function WorkoutListItem(props) {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const workout = props.workout;
	const formattedDate = new Date(workout.startTime).toDateString();

	const handleGoToWorkout = (e) => {
		const workoutId = workout._id;
		context.changeWorkoutId(workoutId);
		navigate('/workout');
	};

	const getFormattedTime = (startTime, endTime) => {
		const dateStartTime = new Date(startTime);
		const dateEndTime = new Date(endTime);

		let seconds = Math.floor((dateEndTime - dateStartTime) / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		let days = Math.floor(hours / 24);

		hours = hours - days * 24;
		minutes = minutes - days * 24 * 60 - hours * 60;
		seconds =
			seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

		return {
			hours: hours.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			}),
			minutes: minutes.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			}),
			seconds: seconds.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false,
			}),
		};
	};

	const formattedTime = getFormattedTime(workout.startTime, workout.endTime);

	return (
		<div className="workout-list-item">
			<div>
				<h6 className="workout-list-item__date">
					{formattedDate} Workout
				</h6>
				{workout.inProgress && (
					<p className="workout-list-item__time">In Progress</p>
				)}
				{!workout.inProgress && (
					<p className="workout-list-item__time">
						Total Time: {formattedTime.hours}:
						{formattedTime.minutes}:{formattedTime.seconds}
					</p>
				)}
			</div>

            <CircleButton
                color={COLORS.blue}
                hoverColor={COLORS.darkBlue}
				onClick={handleGoToWorkout}
				style={{ marginLeft: 'auto' }}
			>
				{workout.inProgress && (
					<i className="fa-solid fa-chevron-right"></i>
				)}
				{!workout.inProgress && <i className="fa-solid fa-eye"></i>}
			</CircleButton>
		</div>
	);
}

export default WorkoutListItem;
