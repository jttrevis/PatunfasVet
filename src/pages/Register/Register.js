import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
export const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const registerUser = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			toast.success('User Registred!');
			navigate('/login');
		} catch (err) {
			console.log(err.message);
			toast.error('Error! Try again!');
			navigate('/');
		}
	};

	return (
		<div>
			<div>
				<h3>Register User</h3>
				<input
					type='email'
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type='password'
					placeholder='Password'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button onClick={registerUser}>Create User</button>
			</div>
			<Link to={'/login'}>Sign in!</Link>
		</div>
	);
};
