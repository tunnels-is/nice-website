import React from "react";
import Hero2 from "../components/hero2";
import ImageRight from "../components/imageRight";
import ImageLeft from "../components/imageLeft";
import ThreeFeatures from "../components/threeFeatures";
import ManyFeatures from "../components/manyFeatures";
import {
	GridItem,
} from '@chakra-ui/react'
import ThreeTierPricing from "../components/pricing";

const Pricing = () => {
	return (<>

		<GridItem colStart={2} colSpan={10} >
			<ImageLeft />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeTierPricing />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ImageRight />
		</GridItem>

	</>);
}

export default Pricing;

