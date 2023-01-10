import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
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
			<Header />
			{user ? (
				<>
					<div className='flex flex-col items-center justify-center container mx-auto min-h-screen '>
						<Logout />
					</div>
				</>
			) : null}
		</>
	);
};

export default Home;
