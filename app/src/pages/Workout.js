import React, { useContext } from 'react';
import './Workout.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import Button from '../components/ui/Button';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import ExerciseItem from '../components/ExerciseItem';

function Workout() {
	const context = useContext(AppContext);
	const workoutId = context.workoutId;
	console.log(context);
	let navigate = useNavigate();

	const handleFinish = () => {
		axios
			.post(
				`http://localhost:8080/api/workouts/stopWorkout/${context.workoutId}`
			)
			.then((response) => {
				const data = response.data;

				if (data.success) {
					context.stopWorkout();
					navigate('/');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const handleAddExercise = () => {};

	return (
		<div>
			<TopBar>
				<Button onClick={handleFinish}>Finish</Button>
			</TopBar>
			<div className="workout__body container">
				<div className="row">
					<div className="col-12">
						<ExerciseItem />
					</div>
				</div>
			</div>
			<BottomBar>
				<ButtonFullWidth onClick={handleAddExercise}>
					Add Exercise
				</ButtonFullWidth>
			</BottomBar>
		</div>
	);
}

export default Workout;
