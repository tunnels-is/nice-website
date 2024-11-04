import React, { useEffect } from "react";
import TextImageRight from "../components/TextImageRight";
import ScrollAnimate from "../components/ScrollAnimate";
import TextImageLeft from "../components/TextImageLeft";
import SmallBanner from "../components/SmallBanner";
import BigFeatures from "../components/BigFeatures";
import Download from "../components/Download";
import STORE from "../store";
import ContactSales from "../components/ContactSales";

const bigFeatures = [
	{ ...STORE.Content.Features.Enterprise.UserManagement, Tag: "bigfeatureanimate3", BG: true },
	{ ...STORE.Content.Features.Enterprise.OnPremisInstall, Tag: "bigfeatureanimate4", BG: false },

	{ ...STORE.Content.Features.Enterprise.HighlyScalable, Tag: "bigfeatureanimate2", BG: true },
	{ ...STORE.Content.Features.Enterprise.NoVendorLockin, Tag: "bigfeatureanimate8", BG: false },

	{ ...STORE.Content.Features.Enterprise.CustomIntegration, Tag: "bigfeatureanimate5", BG: true },
	{ ...STORE.Content.Features.Enterprise.NoHardware, Tag: "bigfeatureanimate7", BG: false },

	{ ...STORE.Content.Features.Enterprise.Support247, Tag: "bigfeatureanimate1", BG: true },
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
			"animate5": true,
			"animate6": true,
			"animate7": true,
		}

		bigFeatures?.forEach(f => {
			a[f.Tag] = true
		})


		initialize(a)

	}, [])

	return (<div className="small-gap-page">


		<SmallBanner
			title={STORE.Content.Enterprise.SmallBanner.Title}
			subtitle={STORE.Content.Enterprise.SmallBanner.Subtitle}
			tag1={"animate1"}
		/>

		<ContactSales />

		<BigFeatures features={bigFeatures} />

		<TextImageRight
			title={STORE.Content.Enterprise.TextImageRight1.Title}
			content={STORE.Content.Enterprise.TextImageRight1.Content}
			img={STORE.Content.Enterprise.TextImageRight1.Img}
			shadow={false}
			tag1={"animate6"}
		/>

		<TextImageLeft
			title={STORE.Content.Enterprise.TextImageLeft.Title}
			content={STORE.Content.Enterprise.TextImageLeft.Content}
			img={STORE.Content.Enterprise.TextImageLeft.Img}
			shadow={false}
			className="gopher"
			tag1={"animate2"}
		/>


	</div>)

}

export default Enterprise;
