import React from 'react';
import './ExerciseItem.css';
import ButtonFullWidth from './ui/ButtonFullWidth';

function ExerciseItem(props) {
	return (
		<div className="exercise-item">
			<h6 className="exercise-item__exercise-name">Bench Press</h6>
			<table>
				<thead>
					<th>Set</th>
					<th>Reps</th>
					<th>Weight</th>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>
							<input
								className="excerise-item__input"
								type="text"
							/>
						</td>
						<td>
							<input
								className="excerise-item__input"
								type="text"
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<div>
				<ButtonFullWidth>Add Set</ButtonFullWidth>
			</div>
		</div>
	);
}

export default ExerciseItem;
