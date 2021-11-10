import "./App.css";
import { useMemo } from "react";

import Home from "./component/Home";
import { StylesProvider } from "@material-ui/core/styles";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
	getPhantomWallet,
	getSlopeWallet,
	getSolflareWallet,
	getSolletWallet,
	getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";

import Intro from "./component/Intro";
import Charity from "./component/Charity";
import Showcase from "./component/Showcase";
import Roadmap from "./component/Roadmap";
import FAQ from "./component/FAQ";
import Team from "./component/Team";
import Footer from "./component/Footer";

const treasury = new anchor.web3.PublicKey(
	process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
	process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
	process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
	palette: {
		type: "dark",
	},
	// .MuiPaper-root {
	// 	color: #fff;
	// 	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	// 	background-color: #424242;
	// }
	overrides: {
		MuiButtonBase: {
			root: {
				justifyContent: "flex-start",
			},
		},
		MuiButton: {
			root: {
				textTransform: undefined,
				padding: "12px 16px",
				borderRadius: "20px",
				margin: "10px",
				background: "#424242",
			},
			startIcon: {
				marginRight: 8,
			},
			endIcon: {
				marginLeft: 8,
			},
		},
	},
});

const App = () => {
	const endpoint = useMemo(() => clusterApiUrl(network), []);

	const wallets = useMemo(
		() => [
			getPhantomWallet(),
			getSlopeWallet(),
			getSolflareWallet(),
			getSolletWallet({ network }),
			getSolletExtensionWallet({ network }),
		],
		[]
	);

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<ConnectionProvider endpoint={endpoint}>
					<WalletProvider
						wallets={wallets}
						autoConnect={true}
					>
						<WalletDialogProvider>
							<div className="app">
								<Home
									candyMachineId={
										candyMachineId
									}
									config={
										config
									}
									connection={
										connection
									}
									startDate={
										startDateSeed
									}
									treasury={
										treasury
									}
									txTimeout={
										txTimeout
									}
								/>

								<Intro />
								<Charity />
								<Showcase />
								<Roadmap />
								<FAQ />
								<Team />
								<Footer />
							</div>
						</WalletDialogProvider>
					</WalletProvider>
				</ConnectionProvider>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
