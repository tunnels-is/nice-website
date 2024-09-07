import React, { useEffect } from "react";
import Triforce from "../components/Triforce"
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import Banner from "../components/Banner";
import ReverseTriforce from "../components/ReverseTriforce";
import ScrollAnimate from "../components/ScrollAnimate";
import STORE from "../store";

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


		window.scrollTo(0, 0)
	}, [])

	console.dir(STORE.Content.Home)
	return (<div className="home-page">

		<Banner
			title={STORE.Content.Home.Banner.Title}
			subtitle={STORE.Content.Home.Banner.Subtitle}
			img1={STORE.Content.Home.Banner.Img1}
			img2={STORE.Content.Home.Banner.Img2}
			img3={STORE.Content.Home.Banner.Img3}
			tag1={"animate1"}
		/>

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


		<TextImageLeft
			link={"/individuals"}
			title={STORE.Content.Home.ImageLeft1.Title}
			content={STORE.Content.Home.ImageLeft1.Content}
			img={STORE.Content.Home.ImageLeft1.Img}
			tag1={"animate8"}
		/>

		<TextImageRight
			link={"/developers"}
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

		<ReverseTriforce
			content1={STORE.Content.Home.ReverseTriForce.Content1}
			img1={STORE.Content.Home.ReverseTriForce.Img1}
			content2={STORE.Content.Home.ReverseTriForce.Content2}
			img2={STORE.Content.Home.ReverseTriForce.Img2}
			content3={STORE.Content.Home.ReverseTriForce.Content3}
			img3={STORE.Content.Home.ReverseTriForce.Img3}
			tag1={"animate5"}
			tag2={"animate6"}
			tag3={"animate7"}
		/>

	</div>)

}

export default Home;
