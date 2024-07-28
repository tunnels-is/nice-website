import React, { useEffect } from "react";
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import STORE from "../store";
import BigFeatures from "../components/BigFeatures";
import SmallFeatures from "../components/SmallFeatures";

const bigFeatures = [
	{ ...STORE.Content.Features.NoPersistance, Tag: "bigfeatureanimate3", BG: false },
	{ ...STORE.Content.Features.AnonymousAccounts, Tag: "bigfeatureanimate1", BG: true },
	{ ...STORE.Content.Features.NoInstallation, Tag: "bigfeatureanimate4", BG: false },
	{ ...STORE.Content.Features.AnonymousPayments, Tag: "bigfeatureanimate2", BG: true },
]

const smallFeatures = [
	{ ...STORE.Content.Features.EverythingIncluded, Tag: "smallfeatureanimate10", BG: true },
	{ ...STORE.Content.Features.FirewallPenetration, Tag: "smallfeatureanimate7", BG: true },
	{ ...STORE.Content.Features.OptimizedSoftware, Tag: "smallfeatureanimate5", BG: false },
	{ ...STORE.Content.Features.PerUserEncryptedStreams, Tag: "smallfeatureanimate6", BG: false },
	{ ...STORE.Content.Features.CommunitySourceAccess, Tag: "smallfeatureanimate8", BG: true },
	// { ...STORE.Content.Features.NicelandOnOpenWRT, Tag: "smallfeatureanimate9", BG: false },
	{ ...STORE.Content.Features.DNSTransformation, Tag: "smallfeatureanimate1", BG: false },
	{ ...STORE.Content.Features.DNSBlocking, Tag: "smallfeatureanimate2", BG: false },
	{ ...STORE.Content.Features.DNSDailyUpdates, Tag: "smallfeatureanimate3", BG: true },
	{ ...STORE.Content.Features.DNSLeakPrevention, Tag: "smallfeatureanimate4", BG: false },
]

const Basic = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)


		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
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
			tag1={"animate3"}
		/>

		<TextImageLeft
			title={STORE.Content.Individual.TextImageLeft.Title}
			content={STORE.Content.Individual.TextImageLeft.Content}
			img={STORE.Content.Individual.TextImageLeft.Img}
			tag1={"animate1"}
		/>

		<BigFeatures features={bigFeatures} />

		<TextImageRight
			title={STORE.Content.Individual.TextImageRight.Title}
			content={STORE.Content.Individual.TextImageRight.Content}
			img={STORE.Content.Individual.TextImageRight.Img}
			tag1={"animate2"}
		/>

		<SmallFeatures features={smallFeatures} />

	</div>)

}

export default Basic;
