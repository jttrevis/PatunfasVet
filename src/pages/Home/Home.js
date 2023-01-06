import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Logout from '../../components/Logout/Logout';
import { auth } from './../../services/firebaseConfig';

const Home = () => {
	const [user, setUser] = useState(null);

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
	return (
		<>
			{user ? (
				<div className='flex flex-col items-center justify-center container mx-auto min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
					<p className='text-5xl font-bold p-5'>Welcome: {user.email}</p>
					<Logout />
				</div>
			) : null}
		</>
	);
};

export default Home;
