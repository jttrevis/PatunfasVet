import { Footer } from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
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

const About = () => {
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
		<>
			<Header />
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
							className='text-2xl cursor-pointer'
						>
							<RxDotFilled />
						</div>
					))}
				</div>
				<section className=''>
					<p className='text-center text-xl p-6'>
						Our vet clinic offers top-notch care for cats and dogs. Our
						experienced team provides preventative care, vaccinations,
						diagnostic testing, and surgery. We have the latest technology and
						equipment for comprehensive and accurate care. We also offer
						emergency services. Contact us for any concerns about your pet's
						health.
					</p>
				</section>
				<section className='flex flex-col justify-center items-center text-center gap-4 py-12'>
					<div>
						<img
							className='w-[400px] rounded-2xl  '
							src='images/vetPhotos/catAbout.jpg'
							alt='Cat with doctor'
						/>
					</div>
					<div>
						<p className='text-center text-xl pb-12'>
							For cats, we provide routine check-ups, feline leukemia and AIDS
							testing, and deworming and flea/tick control. We also offer
							routine dental cleanings and surgeries such as spaying and
							neutering.
						</p>
					</div>
					<div>
						<img
							className='w-[400px] rounded-2xl  '
							src='images/vetPhotos/dogAbout.jpg'
							alt='dog with doctor'
						/>
					</div>
					<div>
						<p className='text-center text-xl pb-12'>
							For dogs, we provide routine check-ups, vaccinations, heartworm
							testing, and deworming and flea/tick control. We also offer
							routine dental cleanings and surgeries such as spaying and
							neutering. We also provide orthopedic surgeries and treatments for
							chronic conditions such as arthritis and diabetes.
						</p>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
};

export default About;
