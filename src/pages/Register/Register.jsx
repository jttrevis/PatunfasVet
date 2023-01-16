import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Header from '../../components/Header/Header';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const navigate = useNavigate();

	const registerUser = async (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			toast.error('Passwords do not match');
			setEmail('');
			setPassword('');
			setPasswordConfirm('');
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			toast.success('User Registred!');
			navigate('/login');
		} catch (error) {
			setEmail('');
			setPassword('');
			setPasswordConfirm('');
			console.log(error.message);
			toast.error('Error! Try again!');
			navigate('/register');
		}
	};

	return (
		<>
			<Header />
			<div className='flex flex-col items-center justify-center container mx-auto min-h-screen '>
				<div className=' flex flex-col items-center justify-center'>
					<h3 className='text-5xl font-bold p-5'>Sign Up</h3>
					<input
						className='m-2 p-1 rounded'
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
					<input
						className='m-2 p-1 rounded'
						type='password'
						placeholder='Password Confirmation'
						onChange={(e) => setPasswordConfirm(e.target.value)}
						value={passwordConfirm}
					/>
					<button
						className='btn shadow-2xl'
						onClick={registerUser}
					>
						Create User
					</button>
				</div>
				<Link
					className='p-3 text-blue-900 font-bold'
					to={'/login'}
				>
					Sign in!
				</Link>
			</div>
		</>
	);
};

export default RegisterForm;
