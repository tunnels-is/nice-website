import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

import {
	AccessibilityIcon,
	EnterIcon,
	ExternalLinkIcon,
} from '@radix-ui/react-icons'


const SideBar = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const menu = {
		groups: [
			{
				title: "Tunnels",
				route: "home",
				user: true,
				items: [
					{ icon: ExternalLinkIcon, label: "Public VPN", route: "public" },
					{ icon: ExternalLinkIcon, label: "Free Features", route: "free" },
					{ icon: ExternalLinkIcon, label: "Features", route: "features" },
					{ icon: EnterIcon, label: "DNS Security", route: "dns" },
					{ icon: EnterIcon, label: "Enterprise", route: "enterprise" },
					{ icon: EnterIcon, label: "Download", route: "download" },
					{ icon: EnterIcon, label: "Pricing", route: "Pricing" },
				]
			},
			{
				title: "Support",
				route: "guide",
				user: false,
				items: [
					{ icon: AccessibilityIcon, label: "Documentation", route: "docs", },
					{ icon: EnterIcon, label: "Timeline", url: "https://calendar.google.com/calendar/embed?src=c_b553c96f3d380946b68a4392a458e8b61ef9245b06f62dfd41045cdbfa682728%40group.calendar.google.com&ctz=UTC" },
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


	return (
		<>
			<div className="burger-grill">

				<svg
					className="delicious-burger"
					onClick={() => props.setHidden(!props.hidden)}
					width="45" height="45" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M66.501 37.9999C66.1238 38.8035 64.9483 39.3974 62.5973 40.5851L42.5662 50.7045C40.8923 51.5502 40.0554 51.973 39.1775 52.1394C38.3999 52.2868 37.602 52.2868 36.8245 52.1394C35.9466 51.973 35.1096 51.5501 33.4357 50.7045L13.4047 40.5851C11.0537 39.3974 9.87819 38.8035 9.50098 37.9999M66.501 52.2499C66.1238 53.0535 64.9483 53.6474 62.5973 54.8351L42.5662 64.9545C40.8923 65.8002 40.0554 66.223 39.1775 66.3894C38.3999 66.5368 37.602 66.5368 36.8245 66.3894C35.9466 66.223 35.1096 65.8001 33.4357 64.9545L13.4047 54.8351C11.0537 53.6474 9.87819 53.0535 9.50098 52.2499M42.5271 36.5657L62.3866 27.1745C64.7175 26.0723 65.8829 25.5212 66.2569 24.7754C66.5823 24.1264 66.5823 23.3735 66.2569 22.7245C65.8829 21.9787 64.7175 21.4276 62.3866 20.3254L42.5271 10.9342C40.8676 10.1494 40.0378 9.75697 39.1674 9.60253C38.3965 9.46574 37.6054 9.46574 36.8346 9.60253C35.9642 9.75697 35.1344 10.1494 33.4748 10.9342L13.6153 20.3254C11.2845 21.4276 10.119 21.9787 9.74506 22.7245C9.41961 23.3735 9.41961 24.1264 9.74506 24.7754C10.119 25.5212 11.2845 26.0723 13.6153 27.1745L33.4748 36.5657C35.1344 37.3505 35.9642 37.7429 36.8346 37.8973C37.6054 38.0341 38.3965 38.0341 39.1674 37.8973C40.0378 37.7429 40.8676 37.3505 42.5271 36.5657Z" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
				<div className="menu-title"
					onClick={() => navHandler("/home")}	>
					Tunnels
				</div>


				<div
					className={`menu-overlay ${props.hidden ? "" : "show-overlay"}`}
					onClick={() => {
						props.setHidden(true)
					}}
				></div>

				<div
					className={`sidebar ${props.hidden ? "" : "show"}`}
					onClick={() => props.setHidden(true)}
				>

					{menu.groups.map((g, i) => {
						return (
							<div key={String(i) + g.title} className="group">
								<div
									key={g.title}
									className="title"
									onClick={() => navHandler("/" + g.route)}
								>
									{g.title}
								</div>

								{g.items.map(i => {
									let onClick = () => { navHandler("/" + i.route) }
									if (i.onClick !== undefined) {
										onClick = i.onClick
									}


									return (
										<>
											{i.url &&
												<a key={i.label} href={i.url} target="_blank" >
													<div className="item"
													>
														<div className={`${sp[1] === i.route ? "active" : ""} text `}>
															{i.label}
														</div>
													</div>
												</a>
											}
											{!i.url &&
												<div className="item"
													key={i.label}
													onClick={onClick}>
													<div className={`${sp[1] === i.route ? "active" : ""} text `}>
														{i.label}
													</div>
												</div>
											}

										</>
									)

								})}
							</div>
						)
					})}

				</div >


			</div >

		</>
	)

}

export default SideBar;
