import React from "react";

const Banner = (props) => {
	return (<div className={"banner viewport-hide " + props.tag1}>

		<div className="top-text">
			<h1 className="text bigtitle">{props.title}</h1>
			<p className="subtitle" dangerouslySetInnerHTML={{ __html: props.subtitle }}>
			</p>
		</div>

		<img
			className="top"
			src={props.img1}
		/>


	</div>)
}

export default Banner;


