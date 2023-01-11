import { Link } from 'react-router-dom';

export const ServicesTable = () => {
	return (
		<div className='md:container '>
			<section className='flex flex-col gap-16  m-12 md:flex-row'>
				<Link
					className='serviceBlock shadow-2xl bg-emergency hover:animate-pulse bg-cover bg-center'
					href='/emergencies'
				>
					Emergencies
				</Link>
				<Link
					className='serviceBlock shadow-2xl bg-appointment hover:animate-pulse bg-cover bg-center '
					href='/appointment'
				>
					Make an appointment
				</Link>
				<Link
					className='serviceBlock shadow-2xl bg-other hover:animate-pulse bg-cover bg-center'
					href='/others'
				>
					Others
				</Link>
			</section>
		</div>
	);
};
