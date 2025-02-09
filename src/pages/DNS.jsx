import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import Download from "../components/Download";
import SmallBanner from "../components/SmallBanner";
import STORE from "../store";
import TextImageRight from "../components/TextImageRight";
import BigFeatures from "../components/BigFeatures";
import Diagram from "../components/TextImageCenter";


const f = [
	{ ...STORE.Content.Features.Basic.DNSBlocking, Tag: "big21", BG: true },
	{ ...STORE.Content.Features.Basic.DNSDailyUpdates, Tag: "big22", BG: false },
	{ ...STORE.Content.Features.Basic.DNSAnalytics, Tag: "big23", BG: false },
	{ ...STORE.Content.Features.Basic.DNSLeakPrevention, Tag: "big24", BG: true },
	{ ...STORE.Content.Features.Basic.DNSCustom, Tag: "big25", BG: true },
	{ ...STORE.Content.Features.Basic.DNSTransformation, Tag: "big26", BG: false },
	{ ...STORE.Content.Features.Basic.DNSCustomBlocklist, Tag: "big27", BG: true },
	{ ...STORE.Content.Features.Basic.DNSWhoIS, Tag: "big28", BG: false },
]

const DNS = () => {
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
		}

		f?.forEach(f => {
			a[f.Tag] = true
		})


		initialize(a)

	}, [])

	return (<div className="basic-page">

		<SmallBanner
			title={STORE.Content.DNSPage.SmallBanner.Title}
			subtitle={STORE.Content.DNSPage.SmallBanner.Subtitle}
			tag1={"a1"}
		/>


		<TextImageRight
			title={STORE.Content.DNSPage.DNSProtection.Title}
			content={STORE.Content.DNSPage.DNSProtection.Content}
			img={STORE.Content.DNSPage.DNSProtection.Img}
			tag1={"a3"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.DnsServerSide.Title}
			content={STORE.Content.Diagrams.DnsServerSide.Content}
			img={STORE.Content.Diagrams.DnsServerSide.Img1}
			tag1={"a2"}
		/>

		<Diagram
			title={STORE.Content.Diagrams.DnsDeviceSide.Title}
			content={STORE.Content.Diagrams.DnsDeviceSide.Content}
			img={STORE.Content.Diagrams.DnsDeviceSide.Img1}
			tag1={"a4"}
		/>

		<BigFeatures features={f} />

	</div>)

}

export default DNS;
