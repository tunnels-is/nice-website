import React from "react";

const Banner = (props) => {
	return (<div className={"banner viewport-hide " + props.tag1}>

		<div className="top-text">
			<h1 className="title">Made by geeks, for geeks</h1>
			<p className="subtitle">
				Cross-platform, lightweight, portable, multi-network VPN
			</p>
		</div>

		<img
			className="top"
			src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
		/>

		<img
			className="left"
			src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
		/>

		<img
			className="right"
			src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
		/>

	</div>)
}

export default Banner;


