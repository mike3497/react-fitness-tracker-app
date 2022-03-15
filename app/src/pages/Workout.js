import React, { useContext, useEffect, useState } from 'react';
import './Workout.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Button from '../components/ui/Button';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import WorkoutExerciseList from '../components/WorkoutExerciseList';

function Workout() {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const [workout, setWorkout] = useState({});

	useEffect(() => {
		axios
			.get(
				`http://localhost:8080/api/workouts/details/${context.workoutId}`
			)
			.then((response) => {
				setWorkout(response.data.result);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleFinishWorkout = () => {
		axios
			.post(
				`http://localhost:8080/api/workouts/stop/${context.workoutId}`
			)
			.then((response) => {
				const data = response.data;

				if (data.success) {
					context.removeWorkoutId();
					navigate('/');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleDeleteWorkout = () => {
		axios
			.delete(`http://localhost:8080/api/workouts/${context.workoutId}`)
			.then((response) => {
				const data = response.data;

				if (data.success) {
					context.removeWorkoutId();
					navigate('/');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleGoBack = () => {
		context.removeWorkoutId();
		navigate('/');
	};

	const handleAddExercise = () => {
		navigate('/addExercise');
	};

	return (
		<div>
			<TopBar>
				<button
					className="workout__button workout__button--delete"
					type="button"
					onClick={handleDeleteWorkout}
				>
					<i className="fa-solid fa-trash-can"></i>
				</button>
				<button
					className="workout__button workout__button--back"
					type="button"
					onClick={handleGoBack}
				>
					<i class="fa-solid fa-chevron-left"></i>
				</button>
				{workout.inProgress && (
					<button
						className="workout__button workout__button--finish"
						type="button"
						onClick={handleFinishWorkout}
					>
						<i class="fa-solid fa-flag-checkered"></i>
					</button>
				)}
			</TopBar>
			<main className="content-body container">
				<WorkoutExerciseList
					workoutExercises={workout.workoutExercises}
				/>
			</main>
			<BottomBar>
				<ButtonFullWidth onClick={handleAddExercise}>
					<i className="fa-solid fa-dumbbell"></i> Add Exercise
				</ButtonFullWidth>
			</BottomBar>
		</div>
	);
}

export default Workout;
