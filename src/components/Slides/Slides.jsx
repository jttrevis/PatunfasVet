import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useState } from 'react';
const slides = [
	{
		url: 'images/vetPhotos/vet2.jpg',
	},
	{
		url: 'images/vetPhotos/vet3.jpg',
	},
	{
		url: 'images/vetPhotos/vet4.jpg',
	},
	{
		url: 'images/vetPhotos/vet5.jpg',
	},
	{
		url: 'images/vetPhotos/vet6.jpg',
	},
	{
		url: 'images/vetPhotos/vet7.jpg',
	},
];
export const Slides = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className='px-2 w-full max-w-[980px] h-[600px]   m-auto relative group md:max-w-[960px] '>
			<div
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
				className='w-full h-full  rounded-2xl bg-center bg-cover bg-no-repeat duration-900 md:bg-contain  '
			></div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
				<BsChevronCompactLeft
					onClick={prevSlide}
					size={30}
				/>
			</div>
			<div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer duration-500'>
				<BsChevronCompactRight
					onClick={nextSlide}
					size={30}
				/>
			</div>
			<div className='flex rounded-2xl justify-center py-2 pb-6 '>
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className='text-2xl cursor-pointer py-4'
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};
