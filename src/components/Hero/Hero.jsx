import React from 'react';
import { AppoitnmentButton } from '../AppointmentButton/AppointmentButton';
import { BackToTopButton } from '../BackToTopButton/BackToTopButton';
import { Footer } from '../Footer/Footer';
import { ServicesTable } from '../ServicesTable/ServicesTable';
import { HoursTable } from './../HoursTable/HoursTable';

export const Hero = () => {
	return (
		<>
			<main className='flex flex-col justify-center items-center'>
				<section className='max-w-screen-lg m-auto'>
					<div className='flex justify-center items-center'>
						<img
							src='images/dog.png'
							alt=''
						/>
					</div>
					<div className='flex flex-col justify-center items-center'>
						<h1 className='text-6xl  text-center font-extrabold p-6'>
							Pantufas Vet
						</h1>
						<h4 className='text-2xl text-center p-12'>
							Welcome to our veterinary clinic! We offer high-quality medical
							services, preventative care, and emergency services for your pets.
							Our experienced staff uses advanced technology to ensure the best
							treatment. We also provide counseling on nutrition and behavior.
							Contact us to schedule an appointment.
						</h4>
						<AppoitnmentButton />
					</div>
				</section>
				<section>
					<div>
						<h1 className='text-4xl font-extrabold my-20 text-center '>
							Our Services
						</h1>
						<ServicesTable />
					</div>
				</section>
				<section>
					<div className='flex flex-col justify-center items-center '>
						<div>
							<h1 className='text-4xl text-center font-extrabold p-6'>
								Come see us
							</h1>
							<p className='text-2xl text-center '>21, Bartlett Street</p>
							<p className='text-2xl text-center '>Liverpool, L15 0HN</p>
						</div>
						<button className=' btn w-[200px] my-8 shadow-2xl'>
							<a
								target='_blank'
								href='https://goo.gl/maps/tPq8ebAhG3Qc4oq86'
								rel='noreferrer'
							>
								Get Directions
							</a>
						</button>
						<HoursTable />
					</div>
				</section>
			</main>
			<div>
				<Footer />
				<BackToTopButton />
			</div>
		</>
	);
};
