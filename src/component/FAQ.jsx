import Pangolin_FAQ from "../static_files/Pangolin_FAQ.png";
import Pangolin_FAQ2 from "../static_files/Pangolin_FAQ2.png";
import React, { useState } from "react";
import { Animated } from "react-animated-css";
const FAQ = () => {
	const [firstQ, setfirstQ] = useState(false);
	const [secondQ, setsecondQ] = useState(false);
	const [thirdQ, setthirdQ] = useState(false);
	const [fourtQ, setfourtQ] = useState(false);
	const [fifthQ, setfifthQ] = useState(false);
	const [sixthQ, setsixthQ] = useState(false);
	const [seventhQ, setseventhQ] = useState(false);
	const [eighthQ, seteighthQ] = useState(false);
	const [ninethQ, setninethQ] = useState(false);
	const [tenthQ, settenthQ] = useState(false);
	const [eleventQ, seteleventQ] = useState(false);
	return (
		<div
			id="FAQPage"
			className="bg-FAQ-bg-color bg-cover bg-center bg-no-repeat relative md:p-30 p-0"
		>
			<div className="flex justify-center md:pb-40 pb-60 py-20">
				<div className="flex flex-col items-center text-center space-y-6 text-white">
					<div className="font-Oswald font-bold md:text-5xl text-3xl text-landing-button-color pb-20">
						FREQUENTLY ASKED QUESTIONS
					</div>
					<div
						onClick={() =>
							setfirstQ(!firstQ)
						}
						className="font-Oswald font-normal md:text-3xl text-lg text-FAQ-text-color cursor-pointer"
					>
						Why did we use Pangolins?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={firstQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color md:w-full w-3/5 ${
							firstQ ? "" : "hidden"
						}`}
					>
						We used Pangolin because there
						has been a virus called
						SARS-CoV-2 that came from
						Pangolins and our chosen charity
						was COVID patients.
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setsecondQ(!secondQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						How much is the minting cost?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={secondQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							secondQ ? "" : "hidden"
						}`}
					>
						0.75SOL
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setthirdQ(!thirdQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						Why 0.75SOL?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={thirdQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							thirdQ ? "" : "hidden"
						}`}
					>
						To sustain the project and
						fulfill the target events on our
						roadmap.
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setfourtQ(!fourtQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						When is the launch date?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={fourtQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							fourtQ ? "" : "hidden"
						}`}
					>
						TBA
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setfifthQ(!fifthQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						Why 1,111 supplies?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={fifthQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							fifthQ ? "" : "hidden"
						}`}
					>
						We only made it 1,111 because we
						wanted to have a low supply and
						high demand on the market.
						<div>
							-There will be 25 Royal
							Pangolins allotted for
							marketing.
						</div>
						<div>
							- There will be 25 Royal
							Pangolins allotted for
							exclusives giveaways.
						</div>
						<div>
							- There will be 11 Royal
							Pangolins to be given
							away to the community.{" "}
						</div>
						<div>
							- There will be 250
							Royal Pangolins allotted
							for the OG Pangolins.{" "}
						</div>
						<div>
							- There will be 800
							Royal Pangolins allotted
							for the Public Sale.
						</div>
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setsixthQ(!sixthQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						Why mint on Royal Pangolins?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={sixthQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							sixthQ ? "" : "hidden"
						}`}
					>
						We do have low supply and
						charitable donation to the COVID
						Patients.
						<div>
							By minting Royal
							Pangolins you will not
							only have aesthetic art
							but also help the COVID
							patients who can't
							suffice the needs of
							their medical expenses.
						</div>
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setseventhQ(!seventhQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl md:w-full w-3/5 text-FAQ-text-color cursor-pointer"
					>
						How will we know if you really
						donated to the charity?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={seventhQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							seventhQ ? "" : "hidden"
						}`}
					>
						After a week of our public
						launch we will provide pictures
						and proofs that we donated the
						money to our chosen charity
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							seteighthQ(!eighthQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						What is the Royal Pangolins
						Treasury?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={eighthQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							eighthQ ? "" : "hidden"
						}`}
					>
						We will allocate a community
						fund wherein the community will
						decide on how we will spend the
						money.
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							setninethQ(!ninethQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						Why hold Royal Pangolins?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={ninethQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							ninethQ ? "" : "hidden"
						}`}
					>
						By holding Royal Pangolins you
						will be eligible to be part of
						the bi-weekly giveaways (SOL)
						from royalty of the developers.
						<div>
							- We will airdrop
							enhanced pixelated arts
							of the top 100 Pangolins
							based on the rankings.
						</div>
						<div>
							- Random drop of SOL to
							holders of Royal
							Pangolins
						</div>
						<div>
							- If you hold 3 or more
							pangolins you will be
							guaranteed to receive 1
							ANT.
						</div>
						<div>
							- You will be able to
							receive our future
							merchandise for free.
						</div>
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							settenthQ(!tenthQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						What are the benefits if you
						have ANTS?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={tenthQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							tenthQ ? "" : "hidden"
						}`}
					>
						You will be eligible to our
						giveaway of $SOL every day. You
						will be eligible to have an
						entry on our exclusive giveaways
						of Royal Pangolins. ANTS will be
						available to be listed on
						secondary marketplaces and the
						floor price will be decided by
						the community. If you have more
						ANTS you will have more chance
						to win the Grand Lottery with a
						prize of ($10,000USD) After the
						ANT is used it will be burned to
						reduce the supply and create a
						demand on the market.
					</Animated>

					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
					<div
						onClick={() =>
							seteleventQ(!eleventQ)
						}
						className="font-Oswald font-normal md:text-3xl text-xl text-FAQ-text-color cursor-pointer"
					>
						What is the total supply of
						ANTS?
					</div>
					<Animated
						animationIn="fadeInDown"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={eleventQ}
						className={`font-Oswald font-normal md:text-lg text-sm text-FAQ-text-color w-1/2 ${
							eleventQ ? "" : "hidden"
						}`}
					>
						The possible max supply of ANTS
						will be 370, assuming that all
						the people who mint will hold 3
						Royal Pangolins. If few people
						will only hold 3 or more Royal
						Pangolins, our next step would
						be to limit the supply to 100
						ANTS and list the remaining ANTS
						on the marketplace.
						<div>
							Eg. There are only 70
							people who will hold 3
							or more Royal Pangolins
							so we will automatically
							have 70 ANTS available
							for them and we will
							generate the remaining
							30 ANTS and list it on
							the marketplace.
						</div>
					</Animated>
					<div class="border-dashed border-2 border-FAQ-border-color w-64"></div>
				</div>
			</div>
			<img
				src={Pangolin_FAQ}
				className="absolute md:w-80 w-48 bottom-0 left-0 "
				alt=""
			/>
			<img
				src={Pangolin_FAQ2}
				className="absolute md:w-80 w-48 bottom-0 right-0 "
				alt=""
			/>
		</div>
	);
};
export default FAQ;
