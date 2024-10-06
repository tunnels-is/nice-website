import React, { useEffect } from "react";
import STORE from "../store";
import ScrollAnimate from "./ScrollAnimate";

const ContactSales = () => {
	const [initialize] = ScrollAnimate();

	useEffect(() => {
		initialize({ ["contact-sales-animate"]: true })
	})

	return (<div className={"contact-sales contact-sales-animate viewport-hide"}>

		<div className="top-text">
			<h1 className="bigtitle">{STORE.Content.ContactSales.Title}</h1>
			<a href={STORE.Content.ContactSales.link} className="subtitle link">
				{STORE.Content.ContactSales.linkTitle}
			</a>
		</div>



	</div >)
}

export default ContactSales;


