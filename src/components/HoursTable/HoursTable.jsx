export const HoursTable = () => {
	return (
		<>
			<div id='hours'>
				<div className='hoursBlock md:w-[700px] bg-cyan-100/10 rounded-2xl'>
					<ul>
						<li>
							Mon <span>7:00am - 5:30pm</span>
						</li>
						<li>
							Tue <span>7:00am - 5:30pm</span>
						</li>
						<li>
							Wed<span>7:00am - 5:30pm</span>
						</li>
						<li>
							Thur <span> 7:00am - 5:30pm</span>
						</li>
						<li>
							Fri<span>7:00am - 5:30pm</span>
						</li>
						<li>
							Sat <span>7:00am - 5:30pm</span>
						</li>
						<li>
							Sun <span>closed</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
