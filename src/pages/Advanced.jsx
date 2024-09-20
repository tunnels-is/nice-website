import React, { useEffect } from "react";
import TextImageRight from "../components/TextImageRight";
import TextImageLeft from "../components/TextImageLeft";
import ScrollAnimate from "../components/ScrollAnimate";
import BigFeatures from "../components/BigFeatures";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";
import STORE from "../store";


const bigFeatures = [
	{ ...STORE.Content.Features.Advanced.ServerAndClientSideDNS, Tag: "bigfeatureanimate3", BG: false },
	{ ...STORE.Content.Features.Advanced.ServerAndClientSideNAT, Tag: "bigfeatureanimate1", BG: true },
	{ ...STORE.Content.Features.Advanced.SeverAndClientSideRoutes, Tag: "bigfeatureanimate4", BG: false },
	{ ...STORE.Content.Features.Advanced.OptimizedSoftware, Tag: "bigfeatureanimate2", BG: true },
	{ ...STORE.Content.Features.Advanced.NicelandOnOpenWRT, Tag: "smallfeatureanimate5", BG: true },
	{ ...STORE.Content.Features.Advanced.CommunitySourceAccess, Tag: "smallfeatureanimate1", BG: false },
]


const Advanced = () => {
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


		initialize(a)

	}, [])

	return (<div className="basic-page">

		<SmallBanner
			title={STORE.Content.Developers.SmallBanner.Title}
			subtitle={STORE.Content.Developers.SmallBanner.Subtitle}
			tag1={"animate3"}
		/>

		<TextImageLeft
			title={STORE.Content.Developers.TextImageLeft.Title}
			content={STORE.Content.Developers.TextImageLeft.Content}
			img={STORE.Content.Developers.TextImageLeft.Img}
			tag1={"animate1"}
		/>

		<TextImageRight
			title={STORE.Content.Developers.TextImageRight.Title}
			content={STORE.Content.Developers.TextImageRight.Content}
			img={STORE.Content.Developers.TextImageRight.Img}
			tag1={"animate2"}
		/>

		<TextImageLeft
			title={STORE.Content.Developers.TextImageLeft2.Title}
			content={STORE.Content.Developers.TextImageLeft2.Content}
			img={STORE.Content.Developers.TextImageLeft2.Img}
			tag1={"animate4"}
		/>

		<BigFeatures features={bigFeatures} />


		<Download />

	</div>)

}

export default Advanced;
