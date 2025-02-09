import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";
import BigFeatures from "../components/BigFeatures";
import STORE from "../store";
import TextImageRight from "../components/TextImageRight";
import Diagram from "../components/TextImageCenter";

const featureList = [
	{ ...STORE.Content.Features.Basic.NoInstallation, Tag: "big11", BG: true },
	{ ...STORE.Content.Features.Basic.AnonymousAccounts, Tag: "big12", BG: false },
	{ ...STORE.Content.Features.Basic.NoPersistance, Tag: "big13", BG: true },
	{ ...STORE.Content.Features.Basic.AnonymousPayments, Tag: "big14", BG: false },
	{ ...STORE.Content.Features.Basic.Torrenting, Tag: "big16", BG: false },
]

const featureList2 = [
	{ ...STORE.Content.Features.Basic.NoLogging, Tag: "big18", BG: false },
	{ ...STORE.Content.Features.Basic.NoTracking, Tag: "big19", BG: true },
	{ ...STORE.Content.Features.Basic.IPV6Blocking, Tag: "big15", BG: true },
	{ ...STORE.Content.Features.Basic.DNSLeakPrevention, Tag: "big17", BG: false },
]

const PublicPage = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
		}

		featureList?.forEach(f => {
			a[f.Tag] = true
		})

		featureList2?.forEach(f => {
			a[f.Tag] = true
		})

		initialize(a)

	}, [])

	return (
		<div className="basic-page">

			<SmallBanner
				title={"The Tunnels Network"}
				subtitle={"multi route public network"}
				tag1={"animate1"}
			/>

			<Diagram
				title={STORE.Content.Diagrams.PublicVPN.Title}
				content={STORE.Content.Diagrams.PublicVPN.Content}
				img={STORE.Content.Diagrams.PublicVPN.Img1}
				tag1={"animate3"}
			/>

			<BigFeatures features={featureList2} />

			<TextImageRight
				link={"dns"}
				title={STORE.Content.DNSPage.DNSProtection.Title}
				content={STORE.Content.DNSPage.DNSProtection.Content}
				img={STORE.Content.DNSPage.DNSProtection.Img}
				tag1={"animate2"}
			/>

			<BigFeatures features={featureList} />

		</div>
	)

}

export default PublicPage;

