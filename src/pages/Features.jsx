import React, { useEffect } from "react";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import STORE from "../store";
import BigFeatures from "../components/BigFeatures";
import SmallFeatures from "../components/SmallFeatures";
import Download from "../components/Download";

const bigFeatures = [
	{ ...STORE.Content.Features.Basic.NoPersistance, Tag: "bigfeatureanimate3", BG: false },
	{ ...STORE.Content.Features.Basic.AnonymousAccounts, Tag: "bigfeatureanimate1", BG: true },
	{ ...STORE.Content.Features.Basic.NoInstallation, Tag: "bigfeatureanimate4", BG: false },
	{ ...STORE.Content.Features.Basic.AnonymousPayments, Tag: "bigfeatureanimate2", BG: true },
]

const smallFeatures = [
	{ ...STORE.Content.Features.Basic.DNSDailyUpdates, Tag: "smallfeatureanimate5", BG: true },
	{ ...STORE.Content.Features.Basic.DNSDailyUpdates, Tag: "smallfeatureanimate1", BG: false },
	{ ...STORE.Content.Features.Basic.DNSBlocking, Tag: "smallfeatureanimate6", BG: false },
	{ ...STORE.Content.Features.Basic.DNSLeakPrevention, Tag: "smallfeatureanimate8", BG: true },
	{ ...STORE.Content.Features.Basic.IPV6Blocking, Tag: "smallfeatureanimate2", BG: true },
]

const Features = () => {

	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)


		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
		}

		bigFeatures?.forEach(f => {
			a[f.Tag] = true
		})

		smallFeatures?.forEach(f => {
			a[f.Tag] = true
		})

		initialize(a)

	}, [])

	return (<div className="basic-page">

		<SmallBanner
			title={STORE.Content.Individual.SmallBanner.Title}
			subtitle={STORE.Content.Individual.SmallBanner.Subtitle}
			tag1={"animate1"}
		/>

		<BigFeatures
			features={bigFeatures}
			tag1={"animate3"}
		/>

		<TextImageLeft
			title={STORE.Content.Individual.TextImageLeft.Title}
			content={STORE.Content.Individual.TextImageLeft.Content}
			img={STORE.Content.Individual.TextImageLeft.Img}
			tag1={"animate2"}
		/>

		{/* 
		<TextImageRight
			title={STORE.Content.Individual.TextImageRight.Title}
			content={STORE.Content.Individual.TextImageRight.Content}
			img={STORE.Content.Individual.TextImageRight.Img}
			tag1={"animate4"}
		/>

		 <SmallFeatures features={smallFeatures} />
		*/}

		<BigFeatures
			features={smallFeatures}
			tag1={"animate4"}
		/>


		<Download />

	</div>)

}

export default Features;
