
import React, { useEffect } from "react";
import ScrollAnimate from "./ScrollAnimate";

const footerLinks = [
	{ text: "Download", url: "download" },
	{ text: "Pricing", url: "pricing" },
	{ text: "", url: "" },
	{ text: "Documentation", url: "docs" },
	{ text: "X", url: "x.com/??" },

	{ text: "Features", url: "features" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "Timeline", url: "https://calendar.google.com/calendar/embed?src=support%40nicelandvpn.is" },
	{ text: "Discord", url: "???" },

	{ text: "Advanced", url: "advanced" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "Slack", url: "??" },

	{ text: "Enterprise", url: "enterprise" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "", url: "" },

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
