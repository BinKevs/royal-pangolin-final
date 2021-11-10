import Heart_Pangolin from "../static_files/Heart_Pangolin.png";
import logo_landing from "../static_files/logo_landing.png";
const Charity = () => {
	return (
		<div className="bg-footer-bg-image  bg-cover bg-center bg-no-repeat">
			<div class="flex flex-col items-center justify-center py-16">
				<img
					src={logo_landing}
					alt=""
					class=" md:w-1/4 w-2/4"
				/>
				<div className="font-Oswald font-semibold  md:text-xl text-md text-gray-900 ">
					Copyright 2021 - Royal Pangolins
				</div>
				<div></div>
			</div>
		</div>
	);
};
export default Charity;
