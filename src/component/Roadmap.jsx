import Roadmap_Pangolin from "../static_files/Roadmap_Pangolin.png";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Roadmap = () => {
	return (
		<div
			id="RoadmapPage"
			className="bg-road-map-bg-color bg-cover bg-center bg-no-repeat relative md:p-32 p-0"
		>
			<div className="flex justify-center md:pb-40 pb-0 py-20">
				<div className="font-Oswald font-bold md:text-5xl text-3xl text-road-map-text-title-color">
					ON THE ROAD MAP
				</div>
			</div>
			<VerticalTimeline lineColor={"#00D8F0"}>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LAUNCHING PHASE
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Launching of GEN 1 Pangolins
						(1,111 NFT's)
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						DISTRIBUTION OF GIVEAWAYS
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Announcement of winners from
						Twitter, Invite Leaderboard, and
						the #1 active on Discord. We
						will airdrop SOL every day to 1
						Pangolin holder who has 3 or
						more Pangolins in their wallet.
						We will also host Pangolin’s NFT
						airdrops weekly.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						LISTING ON SECONDARY
						MARKETPLACES
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						Listing on Secondary
						Marketplaces such as Magic Eden
						and other marketplaces that will
						approve our project.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						CHARITY FUND (LAUNCH)
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						5% of the proceeds will be
						donated to NGO (for COVID
						patients and people who are
						affected by the pandemic.) 5% of
						the proceeds will be for
						sweeping below minting price.
						50% for the development of ANTS.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"right"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						COMMUNITY FUND
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						20% of the proceeds will be used
						for sweeping. 60% of the royalty
						will be given away to a random
						holder of Pangolin every 2
						weeks. 10% will go to our
						partnership with other NFT
						projects. 10% for Royal
						Pangolins Treasury (Community
						Owned)
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					position={"left"}
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "#FFE600",
						color: "#442D15",
					}}
					contentArrowStyle={{
						borderRight:
							"7px solid  #FFE600",
					}}
					iconStyle={{
						background: "#F000D8",
						border: "7px solid #EEE6D3",
					}}
					//
				>
					<h3 className="font-Oswald font-bold md:text-2xl text-lg">
						FUTURE PROJECTS
					</h3>
					<p className="font-Oswald font-normal md:text-lg text-md">
						We will airdrop enhanced
						pixelated arts of the top 100
						Pangolins based on the ranking.
						More collaborations and future
						projects we’ll launch. Launching
						of ANTS. For those who hold 3 or
						more pangolins will be
						guaranteed to receive 1 ANT.
						Grand lottery. Merchandise and
						brand deal collaborations.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
			<img
				src={Roadmap_Pangolin}
				className="absolute w-96 bottom-0 right-40 lg:flex hidden"
				alt=""
			/>
		</div>
	);
};
export default Roadmap;
