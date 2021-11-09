import Pangolin_Left from "../static_files/Pangolin_Left.png";
import Pangolin_Right from "../static_files/Pangolin_Right.png";
import Intro_Line from "../static_files/Intro_Line.png";

const Intro = () => {
	return (
		<div
			id="IntroPage"
			className="bg-intro-bg-image bg-cover bg-center bg-no-repeat md:h-screen  relative"
		>
			<div className="lg:pb-40 pb-80 py-20">
				<div className="m-auto flex flex-col items-center text-center space-y-10 text-intro-first-text-color w-5/6">
					<div className="font-Oswald font-bold md:text-5xl text-3xl mt-10">
						THE ROYALS ARE HERE!
					</div>
					<div className="font-Oswald font-normal  md:text-3xl text-xl text-intro-second-text-color md:w-1/2 w-full">
						Each Pangolin is unique, and
						holding one or more grants you
						access to many perks!
					</div>
					<div className="flex flex-col w-5/6">
						<div className="font-Oswald font-light md:text-2xl text-sm">
							BI-WEEKLY GIVEAWAYS!
						</div>

						<img
							src={Intro_Line}
							className="md:w-2/6 w-8/12 mx-auto"
							alt=""
						/>
						<div className="font-Oswald font-light md:text-2xl text-sm">
							RANDOM DROP OF SOL!
						</div>
						<img
							src={Intro_Line}
							className="md:w-2/6 w-8/12 mx-auto"
							alt=""
						/>
						<div className="font-Oswald font-light md:text-2xl text-sm w-1/2 mx-auto">
							WITH 3 OR MORE
							PANGOLINS,
							<div>
								AN ANT IS
								GUARANTEED!
							</div>
						</div>
						<img
							src={Intro_Line}
							className="md:w-2/6 w-8/12 mx-auto"
							alt=""
						/>
						<div className="font-Oswald font-light  md:text-2xl text-sm">
							MERCHANDISES AND MORE!
						</div>
					</div>
				</div>
			</div>

			<img
				src={Pangolin_Left}
				className="absolute left-0 bottom-0 lg:h-5/6 lg:w-auto w-48"
				alt=""
			/>
			<img
				src={Pangolin_Right}
				className="absolute right-0 bottom-0 lg:h-5/6 lg:w-auto w-48"
				alt=""
			/>
		</div>
	);
};
export default Intro;
