import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './../../services/firebaseConfig';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';

const Header = () => {
	const [menuMobile, setMenuMobile] = useState(true);

	const [user, setUser] = useState(null);

	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
		});
		return listen();
	}, []);

	console.log(user);

	const handleOpenMenuMobile = () => {
		setMenuMobile(!menuMobile);
	};
	return (
		<>
			<header className=' flex items-center justify-evenly mt-20  px-4 mx-auto '>
				<div className='flex '>
					<Link to='/'>
						<img
							className=''
							src='/images/logo.svg'
							alt='logo pantufas vet'
						/>
					</Link>
					<ul className='hidden md:flex items-center p-8 '>
						<Link
							to='/'
							className='p-8 font-bold'
						>
							Home
						</Link>
						<Link
							to='/about'
							className='p-8 font-bold'
						>
							About
						</Link>
						<Link
							to='/appointment'
							className='p-8 font-bold'
						>
							Appointment
						</Link>
						{user ? (
							<div className='p-8 flex flex-col items-center justify-center'>
								<Logout />
							</div>
						) : (
							<div className='p-8 '>
								<Link to='/login'>
									<button className='btn ml-4 shadow-2xl '>Login</button>
								</Link>
							</div>
						)}
					</ul>
				</div>
				<div
					onClick={handleOpenMenuMobile}
					className='block md:hidden'
				>
					{!menuMobile ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu size={20} />
					)}

					<div
						className={
							!menuMobile
								? 'fixed h-screen left-0 top-0 w-[60%] border-r border-r-cyan-500 ease-in-out duration-500'
								: 'fixed  h-screen left-[-100%] ease-in-out duration-500'
						}
					>
						<ul className='uppercase flex flex-col pt-24 h-screen bg-[#0CCBFF] '>
							<Link
								to={'/'}
								className='p-4'
							>
								Home
							</Link>
							<Link
								to={'/about'}
								className='p-4'
							>
								About
							</Link>
							<Link
								to={'/appointment'}
								className='p-4'
							>
								Appointment
							</Link>
							{user ? (
								<div className='p-4'>
									<Logout />
								</div>
							) : (
								<div className='p-4'>
									<Link to='/login'>
										<button className='btn font-bold shadow-2xl '>Login</button>
									</Link>
								</div>
							)}
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
