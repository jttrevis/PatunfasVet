import { Link } from 'react-router-dom';

export const ServicesTable = () => {
	return (
		<div
			id='services'
			className='md:container '
		>
			<section className='flex flex-col gap-16  m-12 md:flex-row'>
				<div className='flex text-center flex-col justify-center items-center hover:scale-110 duration-500'>
					<Link
						className='text-2xl font-bold'
						to='/emergency'
					>
						<img
							src='/images/dogNurser.png'
							alt='vet dog'
							className='serviceBlock flex-col shadow-2xl   '
						/>
						<span>Emergency</span>
					</Link>
				</div>

				<div className='flex flex-col text-center justify-center items-center hover:scale-110 duration-500 '>
					<Link
						className='text-2xl font-bold'
						to='/appointment'
					>
						<img
							src='/images/appCat.png'
							alt='vet dog'
							className='serviceBlock flex-col shadow-2xl  '
						/>
						<span>Make an appointment</span>
					</Link>
				</div>

				<div className='flex flex-col text-center justify-center items-center hover:scale-110 duration-500'>
					<Link
						className='text-2xl font-bold'
						to='/others'
					>
						<img
							src='/images/doccat2.png'
							alt='vet dog'
							className='serviceBlock flex-col shadow-2xl   '
						/>
						<span>Others</span>
					</Link>
				</div>
			</section>
		</div>
	);
};
