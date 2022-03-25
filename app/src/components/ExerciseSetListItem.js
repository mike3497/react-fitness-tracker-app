import React, { useState } from 'react';
import './ExerciseSetListItem.css';
import axios from 'axios';
import CircleButton from './ui/CircleButton';
import Modal from './ui/Modal';
import { COLORS } from '../colors';

function ExerciseSetListItem(props) {
	const exerciseSet = props.exerciseSet;

	const [modalOpen, setModalOpen] = useState(false);

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

	const handleOpenModal = (e) => {
		setModalOpen(true);
		setDisableDeleteButton(true);
	};

	const handleCloseModal = (e) => {
		setModalOpen(false);
		setDisableDeleteButton(false);
	};

	const handleDeleteExerciseSet = (e) => {
		const exerciseSetId = exerciseSet._id;
		axios
			.delete(`http://localhost:8080/api/exercise-sets/${exerciseSetId}`)
			.then((response) => {
				if (response.data.success) {
					setModalOpen(false);
					setDisableDeleteButton(false);
					props.onExerciseSetDeleted(exerciseSetId);
				}
			})
			.catch((response) => {
				setModalOpen(false);
				setDisableDeleteButton(false);
			});
	};

	return (
		<React.Fragment>
			<div
				key={exerciseSet._id}
				className="exercise-set-list-item__set-row"
			>
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
					<CircleButton
						onClick={handleSaveExerciseSet}
						disabled={disableSaveButton}
						style={{
							backgroundColor: COLORS.yellow,
							marginLeft: '2px',
						}}
					>
						<i className="fa-solid fa-floppy-disk"></i>
					</CircleButton>
					<CircleButton
						onClick={handleOpenModal}
						disabled={disableDeleteButton}
						style={{
							backgroundColor: COLORS.orange,
							marginLeft: '4px',
						}}
					>
						<i className="fa-solid fa-trash-can"></i>
					</CircleButton>
				</div>
			</div>
			<Modal
				message="Are you sure you want to delete this set?"
				open={modalOpen}
				handleYes={handleDeleteExerciseSet}
				handleNo={handleCloseModal}
			/>
		</React.Fragment>
	);
}

export default ExerciseSetListItem;
