import React, { useEffect } from "react";
import STORE from "../store";
import ScrollAnimate from "./ScrollAnimate";

const Download = () => {
	const [initialize] = ScrollAnimate();

	useEffect(() => {
		initialize({ ["download-animate"]: true })
	})

	return (<div className={"download download-animate viewport-hide"}>

		<div className="top-text">
			<h1 className="bigtitle">{STORE.Content.Download.Title}</h1>
			<a target="_blank" href={STORE.Content.Download.AllLink} className="subtitle link">
				{STORE.Content.Download.Subtitle}
			</a>
		</div>


		<div className="link-wrapper">
			<a target="_blank" href={STORE.Content.Download.Windows} className="dl link windows">Windows</a>
			<a target="_blank" href={STORE.Content.Download.MacOS} className="dl link macos">MacOS </a>
			<a target="_blank" href={STORE.Content.Download.Linux} className="dl link linux">Linux</a>
		</div>

	</div >)
}

export default Download;


