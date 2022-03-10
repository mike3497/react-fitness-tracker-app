import React, { useState } from 'react';

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
	const initalWorkoutId = localStorage.getItem('workoutId');
	const [workoutId, setWorkoutId] = useState(initalWorkoutId);

	const startWorkout = (workoutId) => {
		setWorkoutId(workoutId);
		localStorage.setItem('workoutId', workoutId);
	};

	const stopWorkout = (workoutId) => {
		setWorkoutId(null);
		localStorage.removeItem('workoutId');
	};

	const contextValue = {
		workoutId,
		startWorkout: startWorkout,
		stopWorkout: stopWorkout,
	};

	return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
