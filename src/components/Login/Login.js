import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return listen();
	}, []);

	const handleSignIn = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				toast.success('Logged in successfully');
				console.log(userCredentials);
				navigate('/home');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			{user ? (
				<>{navigate('/home')}</>
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
						<Link to='/home'>
							<button
								type='submit'
								className='bg-blue-600  hover:bg-blue-900 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-900 text-white rounded p-3  	'
								onClick={handleSignIn}
							>
								Sign In
							</button>
						</Link>
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
