import React from "react";

const Banner = (props) => {
	return (<div className={"banner viewport-hide " + props.tag1}>

		<div className="top-text">
			<h1 className="bigtitle">{props.title}</h1>
			<p className="subtitle">
				{props.subtitle}
			</p>
		</div>

		<img
			className="top"
			src={props.img1}
		/>

		<img
			className="left"
			src={props.img2}
		/>

		<img
			className="right"
			src={props.img3}
		/>

	</div>)
}

export default Banner;


