import React from 'react';
import './WorkoutExerciseListItem.css';
import ButtonFullWidth from './ui/ButtonFullWidth';

function WorkoutExerciseListItem() {
	return (
		<div className="workout-exercise-list-item">
			<h6>Bench Press</h6>
			<div class="container-fluid">
				<div className="row">
					<div class="col">
						<p className="workout-exercise-list-item__header">
							Set
						</p>
					</div>
					<div class="col">
						<p className="workout-exercise-list-item__header">
							Reps
						</p>
					</div>
					<div class="col">
						<p className="workout-exercise-list-item__header">
							Weight
						</p>
					</div>
					<div className="col"></div>
				</div>
				<div className="row">
					<div className="col">
						<p className="workout-exercise-list-item__set-number">
							1
						</p>
					</div>
					<div class="col">
						<input
							className="workout-exercise-list-item__input"
							type="text"
						/>
					</div>
					<div class="col">
						<input
							className="workout-exercise-list-item__input"
							type="text"
						/>
					</div>
					<div className="col">
						<button
							className="workout-exercise-list-item__button workout-exercise-list-item__button--save"
							type="button"
						>
							<i class="fa-solid fa-floppy-disk"></i>
						</button>
						<button
							className="workout-exercise-list-item__button workout-exercise-list-item__button--delete"
							type="button"
						>
							<i class="fa-solid fa-trash-can"></i>
						</button>
					</div>
				</div>
			</div>
			<ButtonFullWidth>
				<i className="fa-solid fa-plus"></i> Add Set
			</ButtonFullWidth>
		</div>
	);
}

export default WorkoutExerciseListItem;
