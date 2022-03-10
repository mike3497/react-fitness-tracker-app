import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './store/app-context';
import Home from './pages/Home';
import Workout from './pages/Workout';
import AddExercise from './pages/AddExercise';

function App() {
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/workout" element={<Workout />} />
					<Route path="/addExercise" element={<AddExercise />} />
				</Routes>
			</BrowserRouter>
		</AppContextProvider>
	);
}

export default App;
