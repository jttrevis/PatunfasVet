import { Toaster } from 'react-hot-toast';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Register />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
			</Routes>
			<Toaster />
		</BrowserRouter>
	);
}

export default App;
