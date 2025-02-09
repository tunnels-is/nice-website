import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

import {
	AccessibilityIcon,
	EnterIcon,
	ExternalLinkIcon,
} from '@radix-ui/react-icons'


const NavBar = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const items = [
		{ icon: ExternalLinkIcon, label: "Public VPN", route: "public" },
		{ icon: ExternalLinkIcon, label: "Private VPN", route: "technical" },
		{ icon: EnterIcon, label: "Routable DNS", route: "dns" },
		{ icon: EnterIcon, label: "Enterprise", route: "enterprise" },
		// { icon: EnterIcon, label: "Pricing", route: "Pricing" },
		{ icon: AccessibilityIcon, label: "Documentation", route: "docs", },
		{ icon: ExternalLinkIcon, label: "Free?", route: "free" },
	]


	let { pathname } = location
	let sp = pathname.split("/")

	const navHandler = (path) => {
		console.log("navigating to:", path)
		navigate(path)
	}


	return (
		<div className={`sidebar`}	>
			<img src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/logo/logo2.svg"
				className="logo"
				onClick={() => navHandler("/")}
			/>

			{items.map(i => {
				let onClick = () => { navHandler("/" + i.route) }
				if (i.onClick !== undefined) {
					onClick = i.onClick
				}


				return (
					<>
						{i.url &&
							<a key={i.label + "link"} href={i.url} target="_blank" >
								<div className="item"
								>
									<div key={i.label + "_link"} className={`${sp[1] === i.route ? "active" : ""} text `}>
										{i.label}
									</div>
								</div>
							</a>
						}
						{!i.url &&
							<div className="item"
								key={i.label + "item"}
								onClick={onClick}>
								<div key={i.label + "_item"} className={`${sp[1] === i.route ? "active" : ""} text `}>
									{i.label}
								</div>
							</div>
						}

					</>
				)

			})}

			<div className="cta-button b1"
				onClick={() => navHandler("/pricing")}
			>
				Download
			</div>
			<div className="cta-button b2"
				onClick={() => navHandler("/download")}
			>
				Sign Up
			</div>
		</div >

	)
}
export default NavBar;
