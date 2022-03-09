import React from 'react';
import './Home.css';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import { useNavigate } from 'react-router-dom';

function Home() {
	let navigate = useNavigate();

	const handleClick = () => {
		navigate('/workout');
	};

	return (
		<div>
			<TopBar />
			<BottomBar>
				<button className="button" type="button" onClick={handleClick}>
					Start Workout
				</button>
			</BottomBar>
		</div>
	);
}

export default Home;
