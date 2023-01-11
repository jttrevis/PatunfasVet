import React from 'react';
import { auth } from './../../services/firebaseConfig';
import { toast } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	const navigate = useNavigate();
	const handleSignOut = async (e) => {
		e.preventDefault();

		await signOut(auth)
			.then(() => {
				toast.success('Bye Bye');
				navigate('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div>
			<button
				className='btn '
				onClick={handleSignOut}
			>
				Sign Out
			</button>
		</div>
	);
};

export default Logout;
