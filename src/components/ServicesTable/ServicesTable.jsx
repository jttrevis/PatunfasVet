import { Link } from 'react-router-dom';

export const ServicesTable = () => {
	return (
		<div id="services" className="md:container ">
			<section className="flex flex-col gap-16  m-12 md:flex-row">
				<div className="flex text-center flex-col justify-center items-center hover:border-b-2 ease-in duration-80  border-black/20  ">
					<Link className="text-2xl font-bold" to="/emergency">
						<img
							src="/images/1.jpg"
							alt="vet dog"
							className="serviceBlock flex-col shadow-2xl  hover:scale-105 duration-500  "
						/>
					</Link>
					<span className=" text-2xl font-bold mt-[12px]">Emergency</span>
				</div>

				<div className="flex flex-col text-center justify-center items-center hover:border-b-2 ease-in duration-80  border-black/20   ">
					<Link className="text-2xl font-bold" to="/appointment">
						<img
							src="/images/2.jpg"
							alt="vet dog"
							className="serviceBlock flex-col shadow-2xl hover:scale-105 duration-500  "
						/>
					</Link>
					<span className=" text-2xl font-bold mt-[12px]">
						Make an appointment
					</span>
				</div>

				<div className="flex flex-col text-center justify-center items-center hover:border-b-2 ease-in duration-80  border-black/20  ">
					<Link className="" to="/others">
						<img
							src="/images/3.jpg"
							alt="vet dog"
							className="serviceBlock flex-col shadow-2xl hover:scale-105 duration-500  "
						/>
					</Link>
					<span className=" text-2xl font-bold mt-[12px]">Others</span>
				</div>
			</section>
		</div>
	);
};
