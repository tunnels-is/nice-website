import React from "react";
import CallToActionWithVideo from "../components/hero"
import Hero2 from "../components/hero2";
import ImageRight from "../components/imageRight";
import ImageLeft from "../components/imageLeft";
import ThreeFeatures from "../components/feature";
import ManyFeatures from "../components/manyFeatures";
import {
	GridItem,
} from '@chakra-ui/react'
import ThreeTierPricing from "../components/pricing";

const Home = () => {
	return (<>

		<GridItem colStart={2} colSpan={10} >
			<Hero2 />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ImageRight />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeFeatures />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ImageLeft />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ImageRight />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeTierPricing />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ManyFeatures />
		</GridItem>
	</>);
}

export default Home;

