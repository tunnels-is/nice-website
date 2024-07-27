import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

import {
	AccessibilityIcon,
	EnterIcon,
	ExitIcon,
	ExternalLinkIcon,
	InfoCircledIcon,
	LayersIcon,
	QuestionMarkCircledIcon,
	Share2Icon,
} from '@radix-ui/react-icons'


const IconWidth = 23
const IconHeight = 23

const SideBar = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const menu = {
		groups: [
			{
				title: "Niceland",
				user: true,
				items: [
					{ icon: Share2Icon, label: "Home", route: "home" },
					{ icon: ExternalLinkIcon, label: "Public VPN", route: "public" },
					{ icon: ExitIcon, label: "Private VPN", route: "private" },
					{ icon: EnterIcon, label: "Enterprise VPN", route: "enterprise" },
				]
			},
			{
				title: "Support",
				user: false,
				items: [
					{ icon: InfoCircledIcon, label: "Help", route: "help", },
					{ icon: AccessibilityIcon, label: "Guides", route: "guides", },
					{ icon: QuestionMarkCircledIcon, label: "FAQ", route: "guides", },
				]
			}

		]
	}


	let { pathname } = location
	let sp = pathname.split("/")

	const navHandler = (path) => {
		console.log("navigating to:", path)
		navigate(path)
	}

	console.dir(sp)

	return (
		<>
			<div className="burger-grill">
				<LayersIcon
					height={35} width={35}
					className="delicious-burger"
					onClick={() => props.setHidden(false)}
				/>
			</div>

			<div
				className={`sidebar ${props.hidden ? "" : "show"}`}
				onClick={() => props.setHidden(true)}
			>

				{menu.groups.map(g => {
					return (
						<div className="group" key={g.title}>
							<div className="title">{g.title}</div>

							{g.items.map(i => {
								return (
									<div className="item"
										key={i.label}
										onClick={() => {
											navHandler("/" + i.route)
										}}
									>

										<i.icon
											className="icon"
											width={IconWidth}
											height={IconHeight} />
										<div
											className={`${sp[1] === i.route ? "active" : ""} text `}
										>
											{i.label}
										</div>

									</div>
								)
							})}

						</div>
					)
				})}

			</div >
		</>
	)

}

export default SideBar;
