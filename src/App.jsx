import { Toaster } from 'react-hot-toast';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import LoginForm from './pages/Login/Login';
import RegisterForm from './pages/Register/Register';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/register'
					element={<RegisterForm />}
				/>
				<Route
					path='/login'
					element={<LoginForm />}
				/>
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
			<Toaster />
		</BrowserRouter>
	);
}

export default App;