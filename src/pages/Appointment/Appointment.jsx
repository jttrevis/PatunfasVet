import React, { useState } from 'react';
import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';
import { Footer } from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import { motion as m } from 'framer-motion';

const Appointment = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			exit={{ opacity: 1 }}
		>
			<Header />
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className='md:flex justify-center items-center '
			>
				<form className='flex flex-col p-8 gap-4'>
					<h2 className='text-2xl text-center '>Request your appointment</h2>
					<input
						className='m-2 p-1 rounded'
						type='text'
						placeholder='Name'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						type='email'
						className='m-2 p-1 rounded'
						placeholder='Email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<input
						type='tel'
						className='m-2 p-1 rounded'
						placeholder='Phone'
						onChange={(e) => setPhone(e.target.value)}
						value={phone}
					/>
					<select
						name='pet '
						className='m-2 p-1 rounded'
					>
						<option value='dog'>Dog</option>
						<option value='cat'>Cat</option>
						<option value='other'>Other</option>
					</select>

					<textarea
						className='m-2 p-1 rounded'
						placeholder='Please enter more information'
					></textarea>
					<button
						className='btn shadow-2xl my-12'
						type='submit'
					>
						Request
					</button>
				</form>
			</m.div>
			<Footer />
			<BackToTopButton />
		</m.div>
	);
};

export default Appointment;
