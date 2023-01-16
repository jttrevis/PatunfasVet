import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import { toast } from 'react-hot-toast';
import Header from '../../components/Header/Header';

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
				toast.success('Logged!');
				navigate('/');
			})

			.catch((error) => {
				console.log(error);
				toast.error('Password or email is incorrect');
			});
	};

	return (
		<>
			{user ? (
				<>{navigate('/')}</>
			) : (
				<div>
					<Header />
					<form className='flex flex-col items-center justify-center container mx-auto min-h-screen '>
						<h3 className='text-5xl font-bold p-5'>Login</h3>
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
						<Link to='/'>
							<button
								type='submit'
								className='btn shadow-2xl'
								onClick={handleSignIn}
							>
								Login
							</button>
						</Link>
						<span>Create a new account?</span>

						<Link
							className='p-3 text-blue-900 font-bold'
							to={'/register'}
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
