import React from "react";

const TextImageRight = (props) => {

	return (<div className="textimageright-component">

		<div className="content text">
			{props.link &&
				<a href={"#" + props.link} className="title link">{props.title}</a>
			}
			{!props.link &&
				<div className="title">{props.title}</div>
			}
			{props.content}
		</div>

		<img
			className={props.tag1 + ` viewport-hide`}
			src={props.img}
		/>

	</div>)

}

export default TextImageRight;

