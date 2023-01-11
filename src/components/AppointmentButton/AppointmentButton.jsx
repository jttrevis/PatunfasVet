import { Link } from 'react-router-dom';
import { FcCalendar } from 'react-icons/fc';
export const AppoitnmentButton = () => {
	return (
		<div className=''>
			<Link to='/appointment'>
				<button
					className='btn animate-bounce flex flex-col items-center'
					type='button'
				>
					Request an Appointment
					<FcCalendar size={35} />
				</button>
			</Link>
		</div>
	);
};
