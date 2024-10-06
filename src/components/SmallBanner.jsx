import React from "react";

const SmallBanner = (props) => {
	return (<div className={"smallbanner viewport-hide " + props.tag1}>

		<div className="top-text">
			<div className="title">{props.title}</div>
			<div className="subtitle">
				{props.subtitle}
			</div>
		</div>

	</div>)
}

export default SmallBanner;


