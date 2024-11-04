import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";
import Triforce from "../components/Triforce";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";

const DownloadPage = () => {
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

	return (<div className="small-gap-page">

		<SmallBanner
			title={"Multi-Platform"}
			subtitle={"available for all platforms"}
			tag1={"animate1"}
		/>

		<Download />

		<Triforce
			content1={STORE.Content.Home.TriForce.Content1}
			img1={STORE.Content.Home.TriForce.Img1}
			content2={STORE.Content.Home.TriForce.Content2}
			img2={STORE.Content.Home.TriForce.Img2}
			content3={STORE.Content.Home.TriForce.Content3}
			img3={STORE.Content.Home.TriForce.Img3}
			tag1={"animate2"}
			tag2={"animate3"}
			tag3={"animate4"}
		/>


	</div>)

}

export default DownloadPage;
