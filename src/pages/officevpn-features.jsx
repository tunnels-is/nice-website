import React from "react";
import ImageRight from "../components/imageRight";
import ImageLeft from "../components/imageLeft";
import ThreeFeatures from "../components/threeFeatures";
import ManyFeatures from "../components/manyFeatures";
import {
	GridItem,
} from '@chakra-ui/react'

import STORE from "../store"

const OfficeVPN = () => {
	let fl = STORE.Content.Features

	return (<>
		<GridItem colStart={2} colSpan={10} >
			<ImageRight
				image={"https://kutty.netlify.app/hero.jpg"}
				title={"This is a title"}
				subtitle={"This is a subtitle"}
				text={"mega big text about something super important that we don't want to forget about,...."}
				button={"Click me!"}
			/>
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeFeatures features={[
				fl["NoLogging"],
				fl["AnonymousMetaData"],
				fl["AnonymousAccounts"]
			]} />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeFeatures features={[
				fl["CashPayments"],
				fl["CashPayments"],
				fl["AnonymousAccounts"]
			]} />
		</GridItem>

		<GridItem colStart={2} colSpan={10} >
			<ThreeFeatures features={[
				fl["PaymentProcessor"],
				fl["AnonymousMetaData"],
				fl["AnonymousAccounts"]
			]} />
		</GridItem>

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
			<ThreeFeatures features={[
				fl["NoLogging"],
				fl["AnonymousMetaData"],
				fl["AnonymousAccounts"]
			]} />
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

		<GridItem colStart={2} colSpan={10} >
			<ManyFeatures />
		</GridItem>


	</>);
}

export default OfficeVPN;

