import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
	const [menuMobile, setMenuMobile] = useState(false);
	return (
		<>
			<header className='flex items-center justify-around h-60 max-w-[1240px] px-4 mx-auto '>
				<div>
					<a href='/'>
						<img
							src='/images/logo.svg'
							alt='logo pantufas vet'
							href='/home'
						/>
					</a>
					<ul className='flex hidden'>
						<li className='p-4'> Home</li>
						<li className='p-4'>About</li>
						<li className='p-4'>Appointment</li>
						<button className='p-4'>Login</button>
					</ul>
				</div>
				<div>
					<AiOutlineMenu size={20} />
					<div className='fixed left-0 top-0 w-[60%] border-r border-r-cyan-500'>
						<ul className='pt-60 uppercase'>
							<li className='p-4'> Home</li>
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
