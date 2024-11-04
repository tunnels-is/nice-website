import React, { useEffect } from "react";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import Banner from "../components/Banner";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";
import BigFeatures from "../components/BigFeatures";

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
			img3={STORE.Content.Home.Banner.Img3}
			tag1={"animate1"}
		/>

		<div>
			<a className="free-link" href="#/free">
				<div className="front-page-free-stuff title link">
					Learn About Our Free Features
				</div>
			</a>
		</div>

		<BigFeatures features={f2} />

		<TextImageLeft
			link={"/features"}
			title={STORE.Content.Home.ImageLeft1.Title}
			content={STORE.Content.Home.ImageLeft1.Content}
			img={STORE.Content.Home.ImageLeft1.Img}
			tag1={"animate8"}
		/>


		<BigFeatures features={f} />

		<TextImageRight
			link={"/dns"}
			title={STORE.Content.Home.ImageRight1.Title}
			content={STORE.Content.Home.ImageRight1.Content}
			img={STORE.Content.Home.ImageRight1.Img}
			tag1={"animate9"}
		/>

		<TextImageLeft
			link={"/enterprise"}
			title={STORE.Content.Home.ImageLeft2.Title}
			content={STORE.Content.Home.ImageLeft2.Content}
			img={STORE.Content.Home.ImageLeft2.Img}
			tag1={"animate10"}
		/>


		<TextImageRight
			link={"/"}
			title={STORE.Content.Home.ImageRight2.Title}
			content={STORE.Content.Home.ImageRight2.Content}
			img={STORE.Content.Home.ImageRight2.Img}
			tag1={"animate11"}
		/>


	</div>)

}

export default Home;
