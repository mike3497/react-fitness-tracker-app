import React, { useState } from 'react';
import './WorkoutExerciseListItem.css';
import ButtonFullWidth from './ui/ButtonFullWidth';
import axios from 'axios';
import ExerciseSetListItem from './ExerciseSetListItem';

function WorkoutExerciseListItem(props) {
	const [workoutExercise, setWorkoutExercise] = useState(
		props.workoutExercise
	);
	const [exercise, setExercise] = useState(props.workoutExercise.exercise);
	const [exerciseSets, setExerciseSets] = useState(
		props.workoutExercise.exerciseSets
	);
	const [disableAddExerciseSetButton, setDisableAddExerciseSetButton] =
		useState(false);

	const handleAddExerciseSet = (e) => {
		setDisableAddExerciseSetButton(true);

		const body = {
			reps: 0,
			weight: 0,
		};

		axios
			.post(
				`http://localhost:8080/api/exercise-sets/${workoutExercise._id}`,
				body
			)
			.then((response) => {
				if (response.data.success) {
					const newExerciseSets = [...exerciseSets];
					newExerciseSets.push(response.data.result);
					setExerciseSets(newExerciseSets);

					setDisableAddExerciseSetButton(false);
				}
			})
			.catch((response) => {
				setDisableAddExerciseSetButton(false);
			});
	};

	const handleSaveExerciseSet = (exerciseSet) => {
		const newExerciseSets = [...exerciseSets];
		const index = newExerciseSets.findIndex(
			(item) => item._id === exerciseSet._id
		);
		newExerciseSets[index] = exerciseSet;
		setExerciseSets(newExerciseSets);
	};

	const handleDeleteExerciseSet = (exerciseSetId) => {
		const newExerciseSets = exerciseSets.filter(
			(item) => item._id !== exerciseSetId
		);
		setExerciseSets(newExerciseSets);
	};

	return (
		<div className="workout-exercise-list-item">
			<h6>{exercise.name}</h6>
			<div className="workout-exercise-list-item__header-row">
				<div className="workout-exercise-list-item__set-column">
					<p className="workout-exercise-list-item__header">Set</p>
				</div>
				<div className="workout-exercise-list-item__reps-column">
					<p className="workout-exercise-list-item__header">Reps</p>
				</div>
				<div className="workout-exercise-list-item__weight-column">
					<p className="workout-exercise-list-item__header">Weight</p>
				</div>
				<div className="workout-exercise-list-item__buttons-column">
					<p className="workout-exercise-list-item__header">Manage</p>
				</div>
			</div>

			{exerciseSets.map((exerciseSet) => (
				<ExerciseSetListItem
					key={exerciseSet._id}
					exerciseSet={exerciseSet}
					onExerciseSetSaved={handleSaveExerciseSet}
					onExerciseSetDeleted={handleDeleteExerciseSet}
				/>
			))}

			<ButtonFullWidth
				onClick={handleAddExerciseSet}
				disabled={disableAddExerciseSetButton}
			>
				<i className="fa-solid fa-plus"></i> Add Set
			</ButtonFullWidth>
		</div>
	);
}

export default WorkoutExerciseListItem;
