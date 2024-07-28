import React from "react";

const SmallBanner = (props) => {
	return (<div className={"smallbanner viewport-hide " + props.tag1}>

		<div className="top-text">
			<h1 className="title">{props.title}</h1>
			<p className="subtitle">
				{props.subtitle}
			</p>
		</div>

	</div>)
}

export default SmallBanner;


