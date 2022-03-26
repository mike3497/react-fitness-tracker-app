import React from 'react';
import './AddExercise.css';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import ButtonFullWidth from '../components/ui/ButtonFullWidth';
import Button from '../components/ui/Button';
import ExerciseList from '../components/ExerciseList';
import { COLORS } from '../colors';

function AddExercise() {
	let navigate = useNavigate();

	const handleGoBack = () => {
		navigate('/workout');
	};

	return (
		<React.Fragment>
			<TopBar />
			<main className="content-body container">
				<ExerciseList />
			</main>
			<BottomBar>
				<ButtonFullWidth
					color={COLORS.blue}
					hoverColor={COLORS.darkBlue}
					onClick={handleGoBack}
				>
					<i className="fa-solid fa-chevron-left"></i> Back
				</ButtonFullWidth>
			</BottomBar>
		</React.Fragment>
	);
}

export default AddExercise;
