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
				<Link href=''>
					<FaFacebookSquare size={45} />
				</Link>
				<Link href=''>
					<FaInstagram size={45} />
				</Link>
				<Link href=''>
					<FaWhatsapp size={45} />
				</Link>
				<Link href=''>
					<FaLinkedinIn size={45} />
				</Link>
			</footer>
		</div>
	);
};
