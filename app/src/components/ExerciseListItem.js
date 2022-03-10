import React from 'react';
import './ExerciseListItem.css';

function ExerciseListItem(props) {
	const exercise = props.exercise;
	console.log(props);

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
				data-exercise-id={exercise._id}
			>
				<i className="fa-solid fa-plus"></i>
			</button>
		</div>
	);
}

export default ExerciseListItem;
