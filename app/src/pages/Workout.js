import React, { useContext, useEffect, useState } from 'react';
import './Workout.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Button from '../components/ui/Button';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import CircleButton from '../components/ui/CircleButton';
import WorkoutExerciseList from '../components/WorkoutExerciseList';
import { COLORS } from '../colors';

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
				<CircleButton
					color={COLORS.orange}
					hoverColor={COLORS.darkOrange}
					onClick={handleDeleteWorkout}
				>
					<i className="fa-solid fa-trash-can"></i>
				</CircleButton>
				<CircleButton
					color={COLORS.yellow}
					hoverColor={COLORS.darkYellow}
					onClick={handleGoBack}
					style={{ marginLeft: '4px' }}
				>
					<i className="fa-solid fa-chevron-left"></i>
				</CircleButton>
				{workout.inProgress && (
					<CircleButton
						color={COLORS.blue}
						hoverColor={COLORS.darkBlue}
						onClick={handleFinishWorkout}
						style={{ marginLeft: '4px' }}
					>
						<i className="fa-solid fa-flag-checkered"></i>
					</CircleButton>
				)}
			</TopBar>
			<main className="content-body container">
				<WorkoutExerciseList
					workoutExercises={workout.workoutExercises}
				/>
			</main>
			<BottomBar>
				<ButtonFullWidth
					color={COLORS.blue}
					hoverColor={COLORS.darkBlue}
					onClick={handleAddExercise}
				>
					<i className="fa-solid fa-dumbbell"></i> Add Exercise
				</ButtonFullWidth>
			</BottomBar>
		</div>
	);
}

export default Workout;
