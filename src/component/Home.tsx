import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
	CandyMachine,
	awaitTransactionSignatureConfirmation,
	getCandyMachineState,
	mintOneToken,
	shortenAddress,
} from "../candy-machine";

import discord from "../static_files/discord.png";
import twitter from "../static_files/twitter.png";
import pangolin from "../static_files/pangolin.gif";
import logo_landing from "../static_files/logo_landing.png";
import mobile_nav_close from "../static_files/mobile_nav_close.png";
import Navbar from "../static_files/Navbar.png";
import { Link } from "react-scroll";
import { Animated } from "react-animated-css";

const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
	candyMachineId: anchor.web3.PublicKey;
	config: anchor.web3.PublicKey;
	connection: anchor.web3.Connection;
	startDate: number;
	treasury: anchor.web3.PublicKey;
	txTimeout: number;
}

const Home = (props: HomeProps) => {
	const [ShowNav, setShowNav] = useState(false);
	const [TimerComplete, setTimerComplete] = useState(false);

	const [balance, setBalance] = useState<number>();
	const [isActive, setIsActive] = useState(false); // true when countdown completes
	const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
	const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

	const [itemsAvailable, setItemsAvailable] = useState(0);
	const [itemsRedeemed, setItemsRedeemed] = useState(0);
	const [itemsRemaining, setItemsRemaining] = useState(0);

	const [alertState, setAlertState] = useState<AlertState>({
		open: false,
		message: "",
		severity: undefined,
	});

	const [startDate, setStartDate] = useState(new Date(props.startDate));

	const wallet = useAnchorWallet();
	const [candyMachine, setCandyMachine] = useState<CandyMachine>();

	const refreshCandyMachineState = () => {
		(async () => {
			if (!wallet) return;

			const {
				candyMachine,
				goLiveDate,
				itemsAvailable,
				itemsRemaining,
				itemsRedeemed,
			} = await getCandyMachineState(
				wallet as anchor.Wallet,
				props.candyMachineId,
				props.connection
			);

			setItemsAvailable(itemsAvailable);
			setItemsRemaining(itemsRemaining);
			setItemsRedeemed(itemsRedeemed);

			setIsSoldOut(itemsRemaining === 0);
			setStartDate(goLiveDate);
			setCandyMachine(candyMachine);
		})();
	};

	const onMint = async () => {
		try {
			setIsMinting(true);
			if (wallet && candyMachine?.program) {
				const mintTxId = await mintOneToken(
					candyMachine,
					props.config,
					wallet.publicKey,
					props.treasury
				);

				const status =
					await awaitTransactionSignatureConfirmation(
						mintTxId,
						props.txTimeout,
						props.connection,
						"singleGossip",
						false
					);

				if (!status?.err) {
					setAlertState({
						open: true,
						message: "Congratulations! Mint succeeded!",
						severity: "success",
					});
				} else {
					setAlertState({
						open: true,
						message: "Mint failed! Please try again!",
						severity: "error",
					});
				}
			}
		} catch (error: any) {
			// TODO: blech:
			let message =
				error.msg ||
				"Minting failed! Please try again!";
			if (!error.msg) {
				if (error.message.indexOf("0x138")) {
				} else if (error.message.indexOf("0x137")) {
					message = `SOLD OUT!`;
				} else if (error.message.indexOf("0x135")) {
					message = `Insufficient funds to mint. Please fund your wallet.`;
				}
			} else {
				if (error.code === 311) {
					message = `SOLD OUT!`;
					setIsSoldOut(true);
				} else if (error.code === 312) {
					message = `Minting period hasn't started yet.`;
				}
			}

			setAlertState({
				open: true,
				message,
				severity: "error",
			});
		} finally {
			if (wallet) {
				const balance =
					await props.connection.getBalance(
						wallet.publicKey
					);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
			setIsMinting(false);
			refreshCandyMachineState();
		}
	};

	useEffect(() => {
		(async () => {
			if (wallet) {
				const balance =
					await props.connection.getBalance(
						wallet.publicKey
					);
				setBalance(balance / LAMPORTS_PER_SOL);
			}
		})();
	}, [wallet, props.connection]);

	useEffect(refreshCandyMachineState, [
		wallet,
		props.candyMachineId,
		props.connection,
	]);

	return (
		<>
			<div className="bg-landing-bg-image bg-cover bg-center bg-no-repeat h-screen">
				{ShowNav ? (
					<Animated
						animationIn="fadeInRight"
						animationOut="fadeOutUp"
						animationInDuration={500}
						animationOutDuration={500}
						isVisible={ShowNav}
						className="lg:hidden fixed w-full flex flex-col h-full bg-white z-10"
						// id="LandingPage"
					>
						<div className="flex justify-between px-10 pt-10">
							<div className="font-Oswald font-bold text-xl">
								MENU
							</div>
							<img
								onClick={() =>
									setShowNav(
										false
									)
								}
								src={
									mobile_nav_close
								}
								alt=""
								className="w-10"
							/>
						</div>
						<div className="font-Oswald font-bold text-showcase-text-color flex flex-col items-center text-xl space-y-8 m-auto cursor-pointer">
							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="IntroPage"
								smooth={true}
								spy={true}
							>
								INTRO
							</Link>

							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="CharityPage"
								smooth={true}
								spy={true}
							>
								CHARITY
							</Link>
							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="ShowcasePage"
								smooth={true}
								spy={true}
							>
								SHOWCASE
							</Link>

							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="RoadmapPage"
								smooth={true}
								spy={true}
							>
								ROADMAP
							</Link>
							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="FAQPage"
								smooth={true}
								spy={true}
							>
								FAQ
							</Link>
							<Link
								onClick={() =>
									setShowNav(
										false
									)
								}
								to="TeamPage"
								smooth={true}
								spy={true}
							>
								TEAM
							</Link>
						</div>
					</Animated>
				) : (
					""
				)}

				<header className="text-white z-20">
					<div className="flex items-center lg:justify-center justify-between pt-4">
						<a className="flex lg-4 lg:mb-0 ">
							<img
								src={
									logo_landing
								}
								alt=""
								className="md:h-44 h-auto md:w-full w-40 min-h-0"
							/>
						</a>
						<div
							onClick={() =>
								setShowNav(true)
							}
							className="lg:hidden flex p-5 mb-4"
						>
							<img
								src={Navbar}
								alt=""
								className="h-8 w-10"
							/>
						</div>
						<nav className="items-center text-xl justify-center font-Oswald font-bold hidden lg:flex space-x-6 pb-8">
							<Link
								to="IntroPage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								INTRO
							</Link>

							<Link
								to="CharityPage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								CHARITY
							</Link>
							<Link
								to="ShowcasePage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								SHOWCASE
							</Link>

							<Link
								to="RoadmapPage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								ROADMAP
							</Link>
							<Link
								to="FAQPage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								FAQ
							</Link>
							<Link
								to="TeamPage"
								smooth={true}
								spy={true}
								className="cursor-pointer hover:text-landing-button-color"
							>
								TEAM
							</Link>
							<a
								rel="noreferrer"
								href="https://twitter.com/RoyalPangolins"
								target="_blank"
								className="mr-5 cursor-pointer"
							>
								<img
									className="h-8"
									src={
										twitter
									}
									alt=""
								/>
							</a>
							<a
								href="https://discord.gg/NbFSjgTd"
								target="_blank"
								className="cursor-pointer"
							>
								<img
									className="h-8"
									src={
										discord
									}
									alt=""
								/>
							</a>
						</nav>
					</div>
				</header>

				<div className="flex lg:flex-row flex-col justify-center lg:absolute lg:bottom-0 h-4/5 w-full">
					<img
						src={pangolin}
						alt=""
						className="lg:w-5/12 w-64 mx-auto lg:mx-0 lg:mb-0 mb-8"
					/>
					<div className="flex text-white justify-center">
						<div className="text-center my-auto md:space-y-8 space-y-4">
							<div className="font-Oswald font-bold text-lg md:text-4xl ">
								{/* text-landing-text-color */}
								WELCOME TO THE
								JUNGLE!
							</div>
							<div className="font-Oswald text-md md:text-2xl">
								<div>
									We are
									the
									Royal
									Pangolins
									1,111
									unique
									Pangolins
								</div>{" "}
								that will be
								living in the{" "}
								<a
									href="https://solana.com/"
									target="_blank"
									className="text-landing-text-color underline"
								>
									Solana
								</a>{" "}
								Blockchain!
							</div>
							<div>
								{/* <button
									disabled={
										TimerComplete
											? true
											: false
									}
									className={`p-4 pl-10 md:pl-16  pr-10 md:pr-16  text-md md:text-xl font-Oswald font-bold w-full md:w-auto md:mb-0 mb-10 + ${
										TimerComplete
											? "bg-landing-button-color text-gray-900"
											: "bg-gray-400	text-white"
									}`}
								>
									MINT
								</button> */}
								{!wallet ? (
									// <ConnectButton>Connect Wallet</ConnectButton>

									<div>
										<ConnectButton
											id="connectButton"
											style={{
												paddingLeft:
													"64px",
												paddingRight:
													"64px",
												paddingTop: "1rem",
												paddingBottom:
													"1rem",
												fontSize: "1.25rem",
												fontWeight: "bold",
												lineHeight: "1.50rem",
												fontFamily: "Oswald, sans-serif",
												marginBottom:
													"2.5rem",
												backgroundColor:
													"rgba(255, 181, 6,1)",
												color: "rgba(17, 24, 39,1",
											}}
											// className="p-4 pl-10 md:pl-16  pr-10 md:pr-16  text-md md:text-xl font-Oswald font-bold w-full md:w-auto md:mb-0 mb-10 bg-landing-button-color text-gray-900"
										>
											Connect
											Wallet
										</ConnectButton>
									</div>
								) : (
									<div>
										<button
											className="p-4 pl-10 md:pl-16  pr-10 md:pr-16  text-md md:text-xl font-Oswald font-bold w-full md:w-auto md:mb-0 mb-10 bg-landing-button-color text-gray-900"
											disabled={
												isSoldOut ||
												isMinting ||
												!isActive
											}
											onClick={
												onMint
											}
											// variant="contained"
										>
											{isSoldOut ? (
												"SOLD OUT"
											) : isActive ? (
												isMinting ? (
													<CircularProgress />
												) : (
													"MINT"
												)
											) : (
												<Countdown
													// date={
													// 	1636560000000
													// }
													// date={
													// 	startDate
													// }
													date={
														Date.now() +
														3000
													}
													onMount={({
														completed,
													}) =>
														completed &&
														setIsActive(
															true
														)
													}
													onComplete={() =>
														setIsActive(
															true
														)
													}
													renderer={
														renderCounter
													}
												/>
											)}
										</button>
									</div>
								)}
							</div>
							{/* <div
								className={`font-Oswald font-bold text-lg md:text-4xl text-center ${
									TimerComplete
										? "hidden"
										: ""
								} `}
							>
								<Countdown
									// date={
									// 	"2021-11-11T00:00:00"
									// }
									date={
										// 1636588800
										1636588800000
									}
									renderer={
										// 	(
										// 	props
										// ) =>
										// 	props.completed ? (
										// 		""
										// 	) : (
										// 		<span>
										// 			{
										// 				props.days
										// 			}{" "}
										// 			Days
										// 			:{" "}
										// 			{
										// 				props.hours
										// 			}{" "}
										// 			Hours
										// 			:{" "}
										// 			{
										// 				props.minutes
										// 			}{" "}
										// 			Minutes
										// 			:{" "}
										// 			{
										// 				props.seconds
										// 			}{" "}
										// 			Seconds
										// 		</span>
										// 	)
										renderCounter
									}
									onComplete={() =>
										setTimerComplete(
											true
										)
									}
									// date={
									// 	Date.now() +
									// 	10000
									// }
									// renderer={
									// 	renderer
									// }
								></Countdown>
							</div> */}
						</div>
					</div>
				</div>

				{/* <div className="absolute bottom-10 right-14 lg:block hidden">
				<div className="w-full flex">
					
				</div>
			</div> */}

				{/* <div className="w-full md:w-28 pl-80 md:pl-0 absolute bottom-0 right-4 md:right-14 hidden">
				<div className="flex justify-center my-8">
					
				</div>
			</div> */}
			</div>
			{/* {wallet && (
				<p>
					Wallet{" "}
					{shortenAddress(
						wallet.publicKey.toBase58() ||
							""
					)}
				</p>
			)}

			{wallet && (
				<p>
					Balance:{" "}
					{(balance || 0).toLocaleString()} SOL
				</p>
			)}

			{wallet && <p>Total Available: {itemsAvailable}</p>}

			{wallet && <p>Redeemed: {itemsRedeemed}</p>}

			{wallet && <p>Remaining: {itemsRemaining}</p>} */}

			{/* <MintContainer> */}

			{/* </MintContainer> */}

			<Snackbar
				open={alertState.open}
				autoHideDuration={6000}
				onClose={() =>
					setAlertState({
						...alertState,
						open: false,
					})
				}
			>
				<Alert
					onClose={() =>
						setAlertState({
							...alertState,
							open: false,
						})
					}
					severity={alertState.severity}
				>
					{alertState.message}
				</Alert>
			</Snackbar>
		</>
	);
};

interface AlertState {
	open: boolean;
	message: string;
	severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
	return (
		<CounterText>
			{hours + (days || 0) * 24} hours, {minutes} minutes,{" "}
			{seconds} seconds
		</CounterText>
	);
};

export default Home;
