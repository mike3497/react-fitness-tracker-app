import Home from './pages/Home';
import Workout from './pages/Workout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContextProvider } from './store/app-context';

function App() {
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/workout" element={<Workout />} />
				</Routes>
			</BrowserRouter>
		</AppContextProvider>
	);
}

export default App;
