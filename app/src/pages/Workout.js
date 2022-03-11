import React, { useContext } from 'react';
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

	const handleFinish = () => {
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

	const handleAddExercise = () => {
		navigate('/addExercise');
	};

	return (
		<div>
			<TopBar>
				<Button onClick={handleFinish}>
					<i className="fa-solid fa-flag-checkered"></i> Finish
				</Button>
			</TopBar>
			<main className="content-body">
				<WorkoutExerciseList />
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
