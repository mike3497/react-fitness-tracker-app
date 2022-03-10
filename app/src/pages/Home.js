import React, { useContext } from 'react';
import './Home.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import WorkoutList from '../components/WorkoutList';

function Home() {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const handleStartWorkout = () => {
		axios
			.post('http://localhost:8080/api/workouts/startWorkout')
			.then((response) => {
				const data = response.data;

				if (data.success) {
					const workoutId = data.result._id;
					context.changeWorkoutId(workoutId);
					navigate('/workout');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<TopBar />
			<main className="content-body container">
				<WorkoutList />
			</main>
			<BottomBar>
				<ButtonFullWidth onClick={handleStartWorkout}>
					<i class="fa-solid fa-person-running"></i> Start Workout
				</ButtonFullWidth>
			</BottomBar>
		</div>
	);
}

export default Home;
