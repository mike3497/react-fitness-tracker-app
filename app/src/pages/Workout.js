import React from 'react';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import './Workout.css';

function Workout() {
	return (
		<div>
			<TopBar />
			<BottomBar>
				<button className="button" type="button">
					Add Exercise
				</button>
			</BottomBar>
		</div>
	);
}

export default Workout;
