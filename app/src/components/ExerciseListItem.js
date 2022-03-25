import React, { useContext } from 'react';
import './ExerciseListItem.css';
import CircleButton from '../components/ui/CircleButton';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COLORS } from '../colors';

function ExerciseListItem(props) {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const exercise = props.exercise;

	const handleAddExercise = (e) => {
		const exerciseId = exercise._id;

		axios
			.post(
				`http://localhost:8080/api/workout-exercises/${context.workoutId}/${exerciseId}`
			)
			.then((response) => {
				if (response.data.success) {
					navigate('/workout');
				}
			});
	};

	return (
		<div className="exercise-list-item">
			<div>
				<h6 className="exercise-list-item__name">{exercise.name}</h6>
				<p className="exercise-list-item__categories">
					{exercise.categories.map((category) => (
						<span key={category._id}>{category.name}</span>
					))}
				</p>
			</div>

			<CircleButton
				onClick={handleAddExercise}
				style={{ backgroundColor: COLORS.blue, marginLeft: 'auto' }}
			>
				<i className="fa-solid fa-plus"></i>
			</CircleButton>
		</div>
	);
}

export default ExerciseListItem;
