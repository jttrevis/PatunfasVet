import React from 'react';
import Header from '../../components/Header/Header';
import { Footer } from './../../components/Footer/Footer';
import { BackToTopButton } from './../../components/BackToTopButton/BackToTopButton';
import { motion as m } from 'framer-motion';

export const Emergency = () => {
	return (
		<div>
			<Header />
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.7 }}
				className='flex flex-col justify-center items-center md:container mx-auto  text-xl p-8 text-center md:w-[780px]'
			>
				<m.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8 }}
					className='text-4xl text-center font-extrabold p-6'
				>
					Emergency
				</m.h1>
				<m.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
				>
					Our veterinary clinic is open during regular business hours, but in
					case of an emergency, please call our emergency line at{' '}
					<span className='font-bold'>555-555-5555</span>. This line is
					available<span className='font-bold'> 24/7</span> for urgent care
					needs. We are committed to providing the best possible care for your
					pet, even outside of regular office hours.
				</m.p>
			</m.div>
			<Footer />
			<BackToTopButton />
		</div>
	);
};
