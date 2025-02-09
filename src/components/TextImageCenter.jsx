import React from "react";

const Diagram = (props) => {
	return (<div className={`${props.className} diagram-component`}>

		<div className={`content`}>
			<div className="title text">{props.title}</div>
			{props.link &&
				<a href={"#" + props.link} className=" link">learn more</a>
			}
			<div className="subtitle text" dangerouslySetInnerHTML={{ __html: props.content }}>
			</div>
		</div>

		<img
			className={`${props.tag1} viewport-hide`}
			src={props.img}
		/>

	</div>)

}

export default Diagram;

