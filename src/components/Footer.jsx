
import React, { useEffect } from "react";
import ScrollAnimate from "./ScrollAnimate";

const footerLinks = [
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },
	{ text: "Home", url: "" },

]

const Footer = () => {

	const [initialize] = ScrollAnimate();

	const numRows = 5;
	const numCols = 10;
	let count = 0
	let total = numRows * numCols
	let baseShade = 150

	const generateShades = () => {
		const shades = [];

		while (count < total) {
			const greyValue = baseShade;
			const shade = `#${greyValue.toString(16).padStart(2, '0')}${greyValue.toString(16).padStart(2, '0')}${greyValue.toString(16).padStart(2, '0')}`;
			shades.push(shade);
			count++
			baseShade += 2
			// console.log(shade)
		}

		return shades;
	};


	useEffect(() => {
		let animate = {}
		shades?.forEach((k, i) => {
			animate["footeranimate" + String(i)] = true
		})

		initialize(animate)

	})

	const shades = generateShades().reverse();

	return (
		<div className="footer">
			<div className="grey-container">
				{shades.map((shade, index) => {
					let item = footerLinks[index]
					let url = ""
					let text = ""
					if (item) {
						url = item.url
						text = item.text
					}

					return (
						<div key={index} className={`grey-div text link  viewport-hide footeranimate` + String(index)} style={{ backgroundColor: shade }}>{text}</div>
					)
				})}
			</div>
		</div>
	);

}

export default Footer;
