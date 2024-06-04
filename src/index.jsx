import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { createRoot } from "react-dom/client";

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { VStack, Container, Grid, GridItem } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

import Home from "./pages/home";
import Footer from "./components/footer";
import WithSubnavigation from "./components/nav";
import STORE from "./store";

import "./assets/style/index.scss"

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
