import React from 'react';
import './AddExercise.css';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import Button from '../components/ui/Button';
import ExerciseList from '../components/ExerciseList';

function AddExercise() {
	let navigate = useNavigate();

	const handleGoBack = () => {
		navigate('/workout');
	};

	return (
		<React.Fragment>
			<TopBar />
			<main class="content-body container">
				<ExerciseList />
			</main>
			<BottomBar>
				<ButtonFullWidth onClick={handleGoBack}>
					<i class="fa-solid fa-chevron-left"></i> Back
				</ButtonFullWidth>
			</BottomBar>
		</React.Fragment>
	);
}

export default AddExercise;
