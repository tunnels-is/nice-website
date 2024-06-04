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
			<ImageLeft
				image={"https://kutty.netlify.app/hero.jpg"}
				title={"This is a title"}
				subtitle={"This is a subtitle"}
				text={"mega big text about something super important that we don't want to forget about,...."}
				button={"Click me!"}
			/>
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeTierPricing />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ImageRight
				image={"https://kutty.netlify.app/hero.jpg"}
				title={"This is a title"}
				subtitle={"This is a subtitle"}
				text={"mega big text about something super important that we don't want to forget about,...."}
				button={"Click me!"}
			/>
		</GridItem>

	</>);
}

export default Pricing;

