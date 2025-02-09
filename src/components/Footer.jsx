
import React, { useEffect } from "react";
import ScrollAnimate from "./ScrollAnimate";

const footerLinks = [
	{ text: "Private VPN", url: "/#/technical" },
	{ text: "Free Features", url: "/#/free" },
	{ text: "Terms", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/tunnels-is/media/master/terms/terms.pdf" },
	{ text: "Github", url: "https://github.com/tunnels-is" },
	{ text: "X", url: "https://x.com/tunnels_is" },

	{ text: "Public VPN", url: "/#/public" },
	{ text: "Documentation", url: "/#/docs" },
	{ text: "Terms (Icelandic)", url: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/tunnels-is/media/master/terms/terms-icelandic.pdf" },
	{ text: "", url: "" },
	{ text: "Discord", url: "https://discord.com/invite/7Ts3PCnCd9" },

	{ text: "Routable DNS", url: "/#/dns" },
	{ text: "Timeline", url: "https://calendar.google.com/calendar/embed?src=support%40nicelandvpn.is" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "Slack", url: "https://join.slack.com/t/tunnelsgroup/shared_invite/zt-2tlxzfz28-qEiH19~_yKP6N1sKxJ_BwQ" },

	{ text: "Enterprise", url: "/#/enterprise" },
	{ text: "Pricing", url: "/#/pricing" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "Signal", url: "https://signal.group/#CjQKIGvNLjUd8o3tkkGUZHuh0gfZqHEsn6rxXOG4S1U7m2lEEhBtuWbyxBjMLM_lo1rVjFX0" },

	{ text: "", url: "" },
	{ text: "Download", url: "/#/download" },
	{ text: "", url: "" },
	{ text: "", url: "" },
	{ text: "Redit", url: "https://www.reddit.com/r/tunnels_is/" },
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
							{url.includes("http") &&
								<a className="link" href={url} target="_blank">
									{text}
								</a>
							}
							{!url.includes("http") &&
								<a className="link" href={url}>
									{text}
								</a>
							}
						</div>
					)
				})}
			</div>
		</div >
	);

}

export default Footer;
