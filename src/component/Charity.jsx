import Heart_Pangolin from "../static_files/Heart_Pangolin.png";

const Charity = () => {
	return (
		<div
			id="CharityPage"
			className="bg-charity-bg-image-mobile md:bg-charity-bg-image bg-cover bg-center bg-no-repeat relative overflow-hidden"
		>
			<div className="flex h-screen mb-20">
				{/* pt-10 md:pt-40 */}
				<div className="m-auto flex flex-col items-center text-center space-y-6 text-white pb-28 sm:pb-0">
					<div className="font-Oswald font-bold md:text-5xl text-3xl text-charity-first-text-color">
						CHARITY EVENT
					</div>
					<div className="font-Oswald font-normal md:text-3xl text-xl text-intro-second-text-color w-1/2">
						Upon launching the website, a
						percentage of the proceeds will
						be donated to NGOs for people
						who are affected by the COVID-19
						pandemic. We know that this year
						has been a tough one for all of
						us, so we want to lend a hand to
						those in need.
					</div>{" "}
				</div>
			</div>

			<img
				src={Heart_Pangolin}
				className="absolute w-8/12 sm:w-64 bottom-0 md:left-0 right-0 md:mx-auto -mr-6"
				alt=""
			/>
		</div>
	);
};
export default Charity;
