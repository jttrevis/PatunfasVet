import React from 'react';
import { AppoitnmentButton } from '../../components/AppointmentButton/AppointmentButton';
import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';
import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { motion as m } from 'framer-motion';

export const Others = () => {
	return (
		<div>
			<Header />
			<m.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				<main className='flex gap-16 flex-col p-6 my-12 max-w-[780px] justify-center items-center mx-auto  '>
					<div className=''>
						<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500 '>
							<h1 className='text-2xl text-center'>CheckUp</h1>
							<img
								src='images/servicesPhotos/petCheckUp.jpg'
								alt=''
								className='serviceBlock  shadow-2xl   '
							/>
							<p className='text-xl px-2'>
								Regular check-ups are important for pet health because they
								detect issues early, prevent serious illness, improve quality of
								life and are a chance to update vaccinations and discuss
								concerns.
							</p>
						</div>
					</div>

					<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500'>
						<h1 className='text-2xl text-center'>Neutering</h1>
						<img
							src='images/servicesPhotos/petNeut.jpg'
							alt=''
							className='serviceBlock  shadow-2xl   '
						/>
						<p className='text-xl px-2'>
							Neutering pets can help control population, prevent unwanted
							litters, and has health benefits. It also decreases aggressive
							behavior, and the likelihood of roaming. It's an important aspect
							of responsible pet ownership.
						</p>
					</div>

					<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500'>
						<h1 className='text-2xl text-center'>Dentistry</h1>
						<img
							src='images/servicesPhotos/petDentist.jpg'
							alt=''
							className='serviceBlock  shadow-2xl   '
						/>
						<p className='text-xl px-2'>
							Dental care for pets is important because it helps to maintain
							their overall health and well-being. Just like in humans, dental
							issues in pets can lead to pain, infection, and even organ damage
							if left untreated. Regular dental checkups and cleanings can help
							prevent these issues and keep your pet's teeth and gums healthy.{' '}
						</p>
					</div>

					<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500'>
						<h1 className='text-2xl text-center'>Surgery</h1>
						<img
							src='images/servicesPhotos/petSurgery.jpg'
							alt=''
							className='serviceBlock  shadow-2xl   '
						/>
						<p className='text-xl px-2'>
							Our veterinary clinic specializes in pet surgeries. Our team of
							experienced veterinarians perform a wide range of procedures, from
							routine spay and neuter to complex orthopedic and soft tissue
							surgeries. Our state-of-the-art equipment and facilities ensure
							the safety and comfort of your pet during the procedure. Trust us
							to provide the best possible care for your furry friend.
						</p>
					</div>

					<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500'>
						<h1 className='text-2xl text-center'>Vaccination</h1>
						<img
							src='images/servicesPhotos/petVac.jpg'
							alt=''
							className='serviceBlock  shadow-2xl   '
						/>
						<p className='text-xl px-2'>
							Vaccinating your pet is important because it helps protect them
							from serious diseases by stimulating the immune system. It also
							helps prevent the spread of diseases to other animals and humans.
							Regular vaccinations are necessary for your pet's health and
							well-being.
						</p>
					</div>
					<div className='flex items-center justify-center'>
						<AppoitnmentButton />
					</div>
				</main>

				<Footer />
				<BackToTopButton />
			</m.div>
		</div>
	);
};
