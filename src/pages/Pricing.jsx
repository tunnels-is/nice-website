import React, { useEffect } from "react";
import ScrollAnimate from "../components/ScrollAnimate";
import SmallBanner from "../components/SmallBanner";
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
		<div className="pricing-page">

			<SmallBanner
				title={"Tunnels Public Network"}
				subtitle={"Download the app to create an account"}
				tag1={"animate1"}
			/>

			<Pricing />

		</div>
	)

}

export default PricingPage;
