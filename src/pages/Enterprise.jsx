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
	{ ...STORE.Content.Features.EnterpriseUserManagement, Tag: "bigfeatureanimate3", BG: false },
	{ ...STORE.Content.Features.Support247, Tag: "bigfeatureanimate1", BG: true },
	{ ...STORE.Content.Features.OnPremisInstall, Tag: "bigfeatureanimate4", BG: false },
	{ ...STORE.Content.Features.HighlyScalable, Tag: "bigfeatureanimate2", BG: true },
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

const Enterprise = () => {
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
			title={STORE.Content.Enterprise.SmallBanner.Title}
			subtitle={STORE.Content.Enterprise.SmallBanner.Subtitle}
			tag1={"animate1"}
		/>

		<BigFeatures features={bigFeatures} />

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft.Title}
			content={STORE.Content.Enterprise.TextImageLeft.Content}
			img={STORE.Content.Enterprise.TextImageLeft.Img}
			tag1={"animate2"}
		/>

		<TextImageRight
			title={STORE.Content.Enterprise.TextImageRight.Title}
			content={STORE.Content.Enterprise.TextImageRight.Content}
			img={STORE.Content.Enterprise.TextImageRight.Img}
			tag1={"animate3"}
		/>

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft2.Title}
			content={STORE.Content.Enterprise.TextImageLeft2.Content}
			img={STORE.Content.Enterprise.TextImageLeft2.Img}
			tag1={"animate4"}
		/>



		<SmallFeatures features={smallFeatures} />

		<Download />

	</div>)

}

export default Enterprise;
