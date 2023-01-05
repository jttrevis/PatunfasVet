import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';

import { toast } from 'react-hot-toast';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const history = useNavigate();

	const [user, setUser] = useState(null);

	const handleSignOut = async () => {
		try {
			await signOut(auth).then(() => {
				setIsLoggedIn(false);
				toast.success('Bye Bye');
				setUser(null);
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			await signInWithEmailAndPassword(auth, email, password).then(
				(response) => {
					setIsLoggedIn(true);
					setUser(response.user);
					toast.success('Welcome: ' + response.user.email);
					history('/home');
				},
			);
		} catch (error) {
			toast.error('Error! Try again.');
			console.log(error.message);
		}
	};
	return (
		<>
			{isLoggedIn ? (
				<div>
					<p>Welcome, {user.email}!</p>

					<button onClick={handleSignOut}>SignOut</button>
				</div>
			) : (
				<div>
					<form className='flex flex-col items-center justify-center container mx-auto min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
						<h3 className='text-5xl font-bold p-5'>Sign In</h3>
						<input
							className='m-2 p-1 rounded '
							type='email'
							placeholder='Email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							className='m-2 p-1 rounded '
							type='password'
							placeholder='Password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<button
							className='bg-blue-600  hover:bg-blue-900 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-900 text-white rounded p-3  	'
							onClick={handleSignIn}
						>
							Sign In
						</button>
						<span>Create a new account?</span>

						<Link
							className='p-3 text-blue-900 font-bold'
							to={'/'}
						>
							Sign up!
						</Link>
					</form>
				</div>
			)}
		</>
	);
};

export default LoginForm;
