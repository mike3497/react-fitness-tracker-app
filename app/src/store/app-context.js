import React, { useState } from 'react';

const AppContext = React.createContext({});

export const AppContextProvider = (props) => {
	const initalWorkoutId = localStorage.getItem('workoutId');
	const [workoutId, setWorkoutId] = useState(initalWorkoutId);

	const changeWorkoutId = (workoutId) => {
		setWorkoutId(workoutId);
		localStorage.setItem('workoutId', workoutId);
	};

	const removeWorkoutId = (workoutId) => {
		setWorkoutId(null);
		localStorage.removeItem('workoutId');
	};

	const contextValue = {
		workoutId,
		changeWorkoutId: changeWorkoutId,
		removeWorkoutId: removeWorkoutId,
	};

	return (
		<AppContext.Provider value={contextValue}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
