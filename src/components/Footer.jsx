
import React, { useEffect } from "react";
import ScrollAnimate from "./ScrollAnimate";

const footerLinks = [
	{ text: "Individuals", url: "" },
	{ text: "Developers", url: "" },
	{ text: "Enterprise", url: "" },
	{ text: "Download", url: "" },
	{ text: "???", url: "" },

	{ text: "Terms", url: "" },
	{ text: "Terms (english)", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },

	{ text: "Terms", url: "" },
	{ text: "Terms (english)", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },

	{ text: "Terms", url: "" },
	{ text: "Terms (english)", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },

]



const Footer = () => {

	const [initialize] = ScrollAnimate();

	useEffect(() => {
		let animate = {}
		footerLinks?.forEach((k, i) => {
			animate["footeranimate" + String(i)] = true
		})

		initialize(animate)

	})


	return (
		<div className="footer">
			<div className="grey-container">
				{footerLinks.map((i, index) => {
					let item = i
					let url = ""
					let text = ""
					if (item) {
						url = item.url
						text = item.text
					}

					return (
						<div
							key={index}
							className={`grey-div text link  viewport-hide footeranimate` + String(index)}
						// style={{ backgroundColor: shade }}
						>
							{text}
						</div>
					)
				})}
			</div>
		</div >
	);

}

export default Footer;
