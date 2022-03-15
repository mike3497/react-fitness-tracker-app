import React, { useState } from 'react';
import './ExerciseSetListItem.css';
import axios from 'axios';

function ExerciseSetListItem(props) {
	const exerciseSet = props.exerciseSet;

	const [disableSaveButton, setDisableSaveButton] = useState(false);
	const [disableDeleteButton, setDisableDeleteButton] = useState(false);
	const [reps, setReps] = useState(exerciseSet.reps);
	const [weight, setWeight] = useState(exerciseSet.weight);

	const handleSaveExerciseSet = (e) => {
		const exerciseSetId = exerciseSet._id;
		setDisableSaveButton(true);

		const body = {
			reps,
			weight,
		};

		axios
			.put(
				`http://localhost:8080/api/exercise-sets/${exerciseSetId}`,
				body
			)
			.then((response) => {
				if (response.data.success) {
					setDisableSaveButton(false);
					props.onExerciseSetSaved(response.data.result);
				}
			})
			.catch((response) => {
				setDisableSaveButton(false);
			});
	};

	const handleDeleteExerciseSet = (e) => {
		const exerciseSetId = exerciseSet._id;
		setDisableDeleteButton(true);

		axios
			.delete(`http://localhost:8080/api/exercise-sets/${exerciseSetId}`)
			.then((response) => {
				if (response.data.success) {
					setDisableDeleteButton(false);
					props.onExerciseSetDeleted(exerciseSetId);
				}
			})
			.catch((response) => {
				setDisableDeleteButton(false);
			});
	};

	return (
		<div key={exerciseSet._id} className="exercise-set-list-item__set-row">
			<div className="exercise-set-list-item__set-column">
				<div></div>
			</div>
			<div className="exercise-set-list-item__reps-column">
				<input
					className="exercise-set-list-item__input"
					type="text"
					defaultValue={reps}
					onChange={(e) => setReps(e.currentTarget.value)}
				/>
			</div>
			<div className="exercise-set-list-item__weight-column">
				<input
					className="exercise-set-list-item__input"
					type="text"
					defaultValue={weight}
					onChange={(e) => setWeight(e.currentTarget.value)}
				/>
			</div>
			<div className="exercise-set-list-item__buttons-column">
				<button
					className="exercise-set-list-item__button exercise-set-list-item__button--save"
					type="button"
					onClick={handleSaveExerciseSet}
					disabled={disableSaveButton}
				>
					<i className="fa-solid fa-floppy-disk"></i>
				</button>
				<button
					className="exercise-set-list-item__button exercise-set-list-item__button--delete"
					type="button"
					onClick={handleDeleteExerciseSet}
					disabled={disableDeleteButton}
				>
					<i className="fa-solid fa-trash-can"></i>
				</button>
			</div>
		</div>
	);
}

export default ExerciseSetListItem;
