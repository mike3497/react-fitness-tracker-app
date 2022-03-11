import React, { useContext } from 'react';
import './ExerciseListItem.css';
import AppContext from '../store/app-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ExerciseListItem(props) {
	const context = useContext(AppContext);
	let navigate = useNavigate();

	const exercise = props.exercise;

	const handleAddExercise = (e) => {
		const exerciseId = e.currentTarget.dataset.exerciseId;

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

			<button
				className="exercise-list-item__button"
				type="button"
				onClick={handleAddExercise}
				data-exercise-id={exercise._id}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	);
}

export default ExerciseListItem;
