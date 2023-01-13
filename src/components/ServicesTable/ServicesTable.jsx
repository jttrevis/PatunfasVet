import { Link } from 'react-router-dom';

export const ServicesTable = () => {
	return (
		<div className='md:container '>
			<section className='flex flex-col gap-16  m-12 md:flex-row'>
				<div className='serviceBlock  shadow-2xl bg-emergency hover:animate-pulse bg-cover bg-center'>
					<Link to='/'>Emergencies</Link>
				</div>
				<div className='serviceBlock  shadow-2xl bg-appointment hover:animate-pulse bg-cover bg-center '>
					<Link to='/appointment'>Make an appointment</Link>
				</div>
				<div className='serviceBlock  shadow-2xl bg-other hover:animate-pulse bg-cover bg-center'>
					<Link to='/'>Others</Link>
				</div>
			</section>
		</div>
	);
};
