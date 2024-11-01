import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";
import STORE from "../store";
import TextImageRight from "../components/TextImageRight";
import TextImageLeft from "../components/TextImageLeft";

const FreePage = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
		}


		initialize(a)

	}, [])

	return (
		<div className="basic-page">

			<SmallBanner
				title={"Free ?!?!"}
				subtitle={"yes.. we have free stuff"}
				tag1={"animate1"}
			/>

			<TextImageRight
				link={"dns"}
				title={STORE.Content.FreePage.DNS.Title}
				content={STORE.Content.FreePage.DNS.Content}
				img={STORE.Content.FreePage.DNS.Img}
				tag1={"animate2"}
			/>

			<TextImageLeft
				link={"features"}
				title={STORE.Content.FreePage.PrivateServers.Title}
				content={STORE.Content.FreePage.PrivateServers.Content}
				img={STORE.Content.FreePage.PrivateServers.Img}
				tag1={"animate3"}
			/>

			<Download />

		</div>
	)

}

export default FreePage;

