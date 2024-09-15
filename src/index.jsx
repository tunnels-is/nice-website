import { HashRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import React, { useEffect, useState } from "react";

import "../node_modules/normalize.css/normalize.css"
// import "./assets/style/reset.scss"
import "./assets/style/index-desktop.scss"
import "./assets/style/index-tablet.scss"
import "./assets/style/index-mobile.scss"
import STORE from "./store";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Download from "./components/Download";
import Enterprise from "./pages/Enterprise";
import DownloadPage from "./pages/Download";
import Documentation from "./pages/Documentation";
import Features from "./pages/Features";
import Advanced from "./pages/Advanced";

var rootEle = document.getElementById('root')
const root = createRoot(rootEle);

const App = () => {
	rootEle.classList.add("light")
	const [hidden, setHidden] = useState(true)

	useEffect(() => {

	})


	return (
		<React.StrictMode>
			<HashRouter >

				<SideBar hidden={hidden} setHidden={setHidden} />

				<div className={`content-wrapper ${hidden ? "" : "blur"}`}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/features" element={<Features />} />
						<Route path="/advanced" element={<Advanced />} />
						<Route path="/enterprise" element={<Enterprise />} />
						<Route path="/download" element={<DownloadPage />} />

						<Route path="/docs/" element={<Documentation />} />
						<Route path="/docs/:tag" element={<Documentation />} />
					</Routes>
				</div>

				<Footer />
			</HashRouter>
		</React.StrictMode >
	)
}


try {
	root.render(<App />)
} catch (error) {
	console.dir(error)
	STORE.Cache.Clear()
	root.render(<div>
		The website had an unexpected error, please try reloading. If reloading does not work please try re-opening the website
	</div>
	)
}
