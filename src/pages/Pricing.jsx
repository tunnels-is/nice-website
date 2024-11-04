import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
import Download from "../components/Download";
import Pricing from "../components/Pricing";

const PricingPage = () => {
	const [initialize] = ScrollAnimate()

	useEffect(() => {
		window.scrollTo(0, 0)

		let a = {
			"animate1": true,
			"animate2": true,
			"animate3": true,
			"animate4": true,
		}

		initialize(a)

	}, [])

	return (
		<div className="basic-page">

			<SmallBanner
				title={"Public Network Access"}
				subtitle={"subscribe to get public network access"}
				tag1={"animate1"}
			/>

			<Pricing />
			<Download />

		</div>
	)

}

export default PricingPage;
