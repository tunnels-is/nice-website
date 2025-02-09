import React, { useEffect } from "react";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import Banner from "../components/Banner";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";
import BigFeatures from "../components/BigFeatures";
import Diagram from "../components/TextImageCenter";

const f = [
	{ ...STORE.Content.Features.Basic.DNSCustom, Tag: "big25", BG: true },
	{ ...STORE.Content.Features.Basic.DNSBlocking, Tag: "big21", BG: false },
]

const f2 = [
	{ ...STORE.Content.Features.Advanced.AbstractNAT, Tag: "big31", BG: false },
	{ ...STORE.Content.Features.Advanced.RouteBased, Tag: "big32", BG: true },
]
const Home = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {

		initialize({
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
			"animate5": true,
			"animate6": true,
			"animate7": true,
			"animate8": true,
			"animate9": true,
			"animate10": true,
			"animate11": true,
		})

		let a = {}

		f?.forEach(f => {
			a[f.Tag] = true
		})
		f2?.forEach(f => {
			a[f.Tag] = true
		})
		initialize(a)

		window.scrollTo(0, 0)
	}, [])

	return (<div className="home-page">


		<Banner
			title={STORE.Content.Home.Banner.Title}
			subtitle={STORE.Content.Home.Banner.Subtitle}
			img1={STORE.Content.Home.Banner.Img1}
			img2={STORE.Content.Home.Banner.Img2}
			tag1={"animate1"}
		/>


		<Diagram
			link={"/technical"}
			title={STORE.Content.Diagrams.Genericvpn.Title}
			content={STORE.Content.Diagrams.Genericvpn.Content}
			img={STORE.Content.Diagrams.Genericvpn.Img1}
			tag1={"animate2"}
		/>

		<Diagram
			link={"/technical"}
			title={STORE.Content.Diagrams.IsolatedNetwork.Title}
			content={STORE.Content.Diagrams.IsolatedNetwork.Content}
			img={STORE.Content.Diagrams.IsolatedNetwork.Img1}
			tag1={"animate3"}
		/>

		<Diagram
			link={"/technical"}
			title={STORE.Content.Diagrams.Routing.Title}
			content={STORE.Content.Diagrams.Routing.Content}
			img={STORE.Content.Diagrams.Routing.Img1}
			tag1={"animate4"}
		/>

		<Diagram
			link={"/technical"}
			title={STORE.Content.Diagrams.Nat.Title}
			content={STORE.Content.Diagrams.Nat.Content}
			img={STORE.Content.Diagrams.Nat.Img1}
			tag1={"animate5"}
		/>

		<Diagram
			link={"/dns"}
			title={STORE.Content.Diagrams.Dns.Title}
			content={STORE.Content.Diagrams.Dns.Content}
			img={STORE.Content.Diagrams.Dns.Img1}
			tag1={"animate6"}
		/>



	</div>)

}

export default Home;
