import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";

import {
	ChakraProvider,
	extendTheme,
	Grid,
	ColorModeScript
} from '@chakra-ui/react'

import Footer from "./components/footer";
import WithSubnavigation from "./components/nav";
import STORE from "./store";

import "./assets/style/index.scss"

import Home from "./pages/home";
import PublicVPN from "./pages/publicvpn-features";
import Pricing from "./pages/pricing";
import OfficeVPN from "./pages/officevpn-features";
import PrivateVPN from "./pages/privatevpn-features";
import DNS from "./pages/dns";
import Threat from "./pages/threat";

const config = {
	initialColorMode: 'dark', // 'dark' | 'light'
	useSystemColorMode: false,
}

const theme = extendTheme({ config })
const root = createRoot(document.getElementById('root'));

const App = () => {
	return (

		<React.StrictMode>
			<ChakraProvider theme={theme} resetCSS={true}>
				<HashRouter >
					<Grid rowGap={50} templateColumns='repeat(12, 1fr)' >
						<WithSubnavigation />

						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/tldr" element={<Home />} />

							<Route path="/public" element={<PublicVPN />} />
							<Route path="/private" element={<PrivateVPN />} />
							<Route path="/office" element={<OfficeVPN />} />
							<Route path="/pricing" element={<Pricing />} />

							<Route path="/dns" element={<DNS />} />
							<Route path="/threat" element={<Threat />} />

							<Route path="*" element={<Home />} />
						</Routes>

					</Grid>

					<Footer></Footer>
				</HashRouter>
			</ChakraProvider>
		</React.StrictMode >

	)
}


try {
	root.render(
		<>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<App />
		</>
	)
} catch (error) {
	console.dir(error)
	STORE.Cache.Clear()
	root.render(<div>
		The website had an unexpected error, please try reloading. If reloading does not work please try re-opening the website
		{/* <button onClick={() => ResetApp()} className={`btn`} > RESET APP </button> */}
	</div>
	)
}
