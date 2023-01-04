import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './../../services/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const [user, setUser] = useState({});
	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const signout = async () => {
		await signOut(auth);
		navigate('/');
	};

	const signin = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success('Logged!');
			console.log(user);
			navigate('/home');
		} catch (err) {
			console.log(err.message);
			toast.error('Error! Try again!');
		}
	};
	return (
		<>
			{user ? (
				<div>
					<div>{user?.email}</div>
					<div>{user?.displayName}</div>
					<div>{user?.photoURL}</div>

					<button onClick={signout}>SignOut</button>
				</div>
			) : (
				<div>
					<form>
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
						<button onClick={signin}>Sign In</button>
					</form>
					<span>Create a new account?</span>

					<Link to={'/'}>Sign up!</Link>
				</div>
			)}
		</>
	);
};
