import TextImageRight from "../components/TextImageRight";
import TextImageLeft from "../components/TextImageLeft";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import Download from "../components/Download";
import React, { useEffect } from "react";
import STORE from "../store";
import TextImageCenter from "../components/TextImageCenter";



const featureList = [
	{ ...STORE.Content.Features.Basic.NoInstallation, Tag: "big11", BG: false },
	{ ...STORE.Content.Features.Basic.AnonymousAccounts, Tag: "big12", BG: true },
	{ ...STORE.Content.Features.Basic.NoPersistance, Tag: "big13", BG: true },
	{ ...STORE.Content.Features.Basic.AnonymousPayments, Tag: "big14", BG: true },
]

const featureList2 = [
	{ ...STORE.Content.Features.Basic.IPV6Blocking, Tag: "big15", BG: false },
	{ ...STORE.Content.Features.Advanced.OptimizedSoftware, Tag: "big41", BG: true },
	{ ...STORE.Content.Features.Advanced.TunnelsOnOpenWRT, Tag: "big42", BG: false },
	{ ...STORE.Content.Features.Advanced.CommunitySourceAccess, Tag: "big43", BG: false },
]



const Features = () => {

	const [initialize] = ScrollAnimate()

	useEffect(() => {
		// window.scrollTo(0, 0)

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


		featureList?.forEach(f => {
			a[f.Tag] = true
		})
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

		<TextImageCenter
			className={"features-tunnels-diagram"}
			shadow={false}
			title={STORE.Content.FeaturePage.TunnelsToServersDiagram.Title}
			content={STORE.Content.FeaturePage.TunnelsToServersDiagram.Content}
			img={STORE.Content.FeaturePage.TunnelsToServersDiagram.Img}
			tag1={"a2"}
		/>

		<TextImageLeft
			title={STORE.Content.FeaturePage.PrivateServers.Title}
			content={STORE.Content.FeaturePage.PrivateServers.Content}
			img={STORE.Content.FeaturePage.PrivateServers.Img}
			tag1={"a3"}
		/>

		<TextImageRight
			title={STORE.Content.FeaturePage.Tunnels.Title}
			content={STORE.Content.FeaturePage.Tunnels.Content}
			img={STORE.Content.FeaturePage.Tunnels.Img}
			tag1={"a4"}
		/>


		<TextImageLeft
			title={STORE.Content.FeaturePage.DynamicNetworking.Title}
			content={STORE.Content.FeaturePage.DynamicNetworking.Content}
			img={STORE.Content.FeaturePage.DynamicNetworking.Img}
			tag1={"a5"}
		/>


		<TextImageRight
			title={STORE.Content.FeaturePage.DNSCorrectness.Title}
			content={STORE.Content.FeaturePage.DNSCorrectness.Content}
			img={STORE.Content.FeaturePage.DNSCorrectness.Img}
			tag1={"a7"}
		/>

		<BigFeatures features={featureList} />

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft.Title}
			content={STORE.Content.Enterprise.TextImageLeft.Content}
			img={STORE.Content.Enterprise.TextImageLeft.Img}
			shadow={false}
			className="gopher"
			tag1={"a8"}
		/>

		<BigFeatures features={featureList2} />

		<Download />

	</div>)

}

export default Features;
