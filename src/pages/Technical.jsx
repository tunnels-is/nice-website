import TextImageRight from "../components/TextImageRight";
import TextImageLeft from "../components/TextImageLeft";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import Download from "../components/Download";
import React, { useEffect } from "react";
import STORE from "../store";
import TextImageCenter from "../components/TextImageCenter";
import Diagram from "../components/TextImageCenter";


const featureList2 = [
	{ ...STORE.Content.Features.Advanced.OptimizedSoftware, Tag: "big41", BG: true },
	{ ...STORE.Content.Features.Advanced.TunnelsOnOpenWRT, Tag: "big42", BG: false },
	{ ...STORE.Content.Features.Advanced.CommunitySourceAccess, Tag: "big43", BG: false },
]

const Technical = () => {

	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"a1": true,
			"a2": true,
			"a3": true,
			"a4": true,
			"a5": true,
			"a6": true,
			"a7": true,
			"a8": true,
			"a9": true,
			"a10": true,
			"a11": true,
			"a12": true,
			"a13": true,
			"a14": true,
			"a15": true,
			"a16": true,
			"a17": true,
			"a18": true,
		}

		featureList2?.forEach(f => {
			a[f.Tag] = true
		})

		initialize(a)

	}, [])

	return (<div className="basic-page">

		<SmallBanner
			title={STORE.Content.FeaturePage.SmallBanner.Title}
			subtitle={STORE.Content.FeaturePage.SmallBanner.Subtitle}
			tag1={"a1"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.VPNEncryption.Title}
			content={STORE.Content.Diagrams.VPNEncryption.Content}
			img={STORE.Content.Diagrams.VPNEncryption.Img1}
			tag1={"a2"}
		/>

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft.Title}
			content={STORE.Content.Enterprise.TextImageLeft.Content}
			img={STORE.Content.Enterprise.TextImageLeft.Img}
			shadow={false}
			className="gopher"
			tag1={"a3"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.IsolatedNetworkDetails.Title}
			content={STORE.Content.Diagrams.IsolatedNetworkDetails.Content}
			img={STORE.Content.Diagrams.IsolatedNetworkDetails.Img1}
			tag1={"a4"}
		/>

		<BigFeatures features={featureList2} />

		<Diagram
			title={STORE.Content.Diagrams.RoutingDetails.Title}
			content={STORE.Content.Diagrams.RoutingDetails.Content}
			img={STORE.Content.Diagrams.RoutingDetails.Img1}
			tag1={"a5"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.NatDetails.Title}
			content={STORE.Content.Diagrams.NatDetails.Content}
			img={STORE.Content.Diagrams.NatDetails.Img1}
			tag1={"a6"}
		/>

	</div>)

}

export default Technical;
