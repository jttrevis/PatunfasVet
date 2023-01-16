import React from 'react';
import Header from '../../components/Header/Header';
import { Footer } from './../../components/Footer/Footer';
import { BackToTopButton } from './../../components/BackToTopButton/BackToTopButton';

export const Emergency = () => {
	return (
		<div>
			<Header />
			<div className='flex flex-col justify-center items-center md:container mx-auto  text-xl p-8 text-center md:w-[780px]'>
				<h1 className='text-4xl text-center font-extrabold p-6'>Emergency</h1>
				<p>
					Our veterinary clinic is open during regular business hours, but in
					case of an emergency, please call our emergency line at{' '}
					<span className='font-bold'>555-555-5555</span>. This line is
					available<span className='font-bold'> 24/7</span> for urgent care
					needs. We are committed to providing the best possible care for your
					pet, even outside of regular office hours.
				</p>
			</div>
			<Footer />
			<BackToTopButton />
		</div>
	);
};
