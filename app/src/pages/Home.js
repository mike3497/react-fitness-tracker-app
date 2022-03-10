import React, { useContext } from 'react';
import './Home.css';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import AppContext from '../store/app-context';

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
					context.startWorkout(workoutId);
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
			<BottomBar>
				<ButtonFullWidth onClick={handleStartWorkout}>
					Start Workout
				</ButtonFullWidth>
			</BottomBar>
		</div>
	);
}

export default Home;
