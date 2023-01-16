import {
	FaFacebookSquare,
	FaLinkedinIn,
	FaInstagram,
	FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const Footer = () => {
	return (
		<div>
			<footer className='flex flex-row justify-center h-[150px] gap-6'>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.facebook.com/junior.trevisol'
				>
					<FaFacebookSquare size={45} />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.instagram.com/juniortrevisol91/'
				>
					<FaInstagram size={45} />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://wa.me/+4407858363772'
				>
					<FaWhatsapp size={45} />
				</a>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/jrtrevisol/'
				>
					<FaLinkedinIn size={45} />
				</a>
			</footer>
			<div className='text-center p-4'>
				<p className='text-xs	'>email :contacttrevisol@gmail.com</p>
				<p className='text-xs	'>created by: Junior Cesar Trevisol</p>
				<p className='text-xs	'>phone: +44 07858363772</p>
			</div>
		</div>
	);
};
