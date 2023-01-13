import { BackToTopButton } from '../../components/BackToTopButton/BackToTopButton';
import { Slides } from '../../components/Slides/Slides';
import { Footer } from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';

const About = () => {
	return (
		<>
			<Header />
			<div className='px-2 w-full max-w-[980px] h-[600px]   m-auto relative group md:max-w-[960px] '>
				<Slides />
				<section className='py-12'>
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
				<BackToTopButton />
			</div>
		</>
	);
};

export default About;
