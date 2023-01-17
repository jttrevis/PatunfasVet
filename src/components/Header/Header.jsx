import { onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { auth } from './../../services/firebaseConfig';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

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

	const handleOpenMenuMobile = useCallback(() => {
		setMenuMobile(!menuMobile);
	}, [menuMobile]);

	return (
		<>
			<header className=' flex items-center justify-center mt-20  px-4 mx-auto  '>
				<div className='flex  '>
					<Link to='/'>
						<img
							className='ml-6'
							src='/images/logo.svg'
							alt='logo pantufas vet'
						/>
					</Link>
					<ul className='hidden  md:flex items-center p-8 '>
						<Link
							to='/'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Home
						</Link>
						<Link
							to='/about'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							About
						</Link>
						<Link
							to='/appointment'
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Appointment
						</Link>
						<Link
							to={'/others'}
							className='p-8 font-bold hover:scale-150 duration-300'
						>
							Our Services
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
						<AiOutlineClose size={25} />
					) : (
						<AiOutlineMenu
							size={25}
							className=''
						/>
					)}

					<div
						className={
							!menuMobile
								? 'fixed z-50  h-screen left-0 top-0 w-[60%] border-r border-r-cyan-500 ease-in-out duration-500'
								: 'fixed z-50  h-screen left-[-60%] border-r border-r-cyan-500 ease-in-out duration-500'
						}
					>
						<ul className=' z-10 uppercase relative  flex flex-col pt-24 h-screen bg-[#0CCBFF] '>
							<Link
								to={'/'}
								className='p-4 font-bold hover:opacity-60'
							>
								Home
							</Link>
							<Link
								to={'/about'}
								className='p-4 font-bold hover:opacity-60 '
							>
								About
							</Link>
							<Link
								to={'/appointment'}
								className='p-4 font-bold hover:opacity-60'
							>
								Appointment
							</Link>

							<Link
								to={'/others'}
								className='p-4 font-bold hover:opacity-60'
							>
								Our Services
							</Link>

							{user ? (
								<div className=''>
									<Logout />
								</div>
							) : (
								<div className='p-4 '>
									<Link to='/login'>
										<button className='btn  font-bold shadow-2xl '>
											Login
										</button>
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
