import React from "react";

const TextImageLeft = (props) => {
	return (<div className="textimageleft-component">

		<img
			className={props.tag1 + ` viewport-hide`}
			src={props.img}
		/>

		<div className={`content text`}>
			{props.link &&
				<a href={"#" + props.link} className="title link">{props.title}</a>
			}
			{!props.link &&
				<div className="title">{props.title}</div>
			}
			{props.content}
		</div>


	</div>)

}

export default TextImageLeft;

