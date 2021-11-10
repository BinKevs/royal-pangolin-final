import chidori from "../static_files/chidori.png";
import gonfreecs from "../static_files/gonfreecs.png";
import hagoromo from "../static_files/hagoromo.png";
import nofomo from "../static_files/nofomo.png";

const Team = () => {
	return (
		<div
			id="TeamPage"
			className="md:bg-team-bg-image bg-team-bg-image-mobile bg-cover bg-center bg-no-repeat"
		>
			<div className="flex h-full md:h-screen p-10">
				<div className="m-auto">
					<div className="flex justify-center font-Oswald font-semibold md:text-5xl text-3xl items-center text-FAQ-border-color md:mb-8">
						THE ROYAL TEAM
					</div>
					<div className="flex flex-col md:flex-row p-8 gap-8">
						<div>
							<img
								src={hagoromo}
								alt="..."
								className="shadow-lg rounded mb-8 border-8 border-team-border-color"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-FAQ-border-color mb-2">
								HAGOROMO
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-white">
								CEO / Developer
							</div>
						</div>
						<div>
							<img
								src={chidori}
								alt="..."
								className="shadow-lg rounded mb-8 border-8 border-team-border-color"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-FAQ-border-color mb-2">
								CHIDORI
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-white">
								Co-Developer
							</div>
						</div>
						<div>
							<img
								src={gonfreecs}
								alt="..."
								className="shadow-lg rounded mb-8 border-8 border-team-border-color"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-FAQ-border-color mb-2">
								GON FREECS
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-white">
								COO
							</div>
						</div>
						<div>
							<img
								src={nofomo}
								alt="..."
								className="shadow-lg rounded mb-8 border-8 border-team-border-color"
							/>
							<div className="font-Oswald font-semibold md:text-2xl text-xl text-FAQ-border-color mb-2">
								NO FOMO
							</div>
							<div className="font-Oswald font-light md:text-xl text-lg text-white">
								Artist & Design
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Team;
