import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menuMobile, setMenuMobile] = useState(false);

	const handleOpenMenuMobile = () => {
		setMenuMobile(!menuMobile);
	};
	return (
		<>
			<header className='flex  items-center justify-center h-60 max-w-[1240px] px-4 mx-auto '>
				<div className=''>
					<Link to='/'>
						<img
							src='/images/logo.svg'
							alt='logo pantufas vet'
						/>
					</Link>
					<ul className='hidden md:flex'>
						<li className='p-4'>Home</li>
						<li className='p-4'>About</li>
						<li className='p-4'>Appointment</li>
						<button className='p-4'>Login</button>
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
						<ul className='uppercase pt-24 h-screen bg-blue-400'>
							<li className='p-4'>Home</li>
							<li className='p-4'>About</li>
							<li className='p-4'>Appointment</li>
							<button className='p-4'>Login</button>
						</ul>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
