import React from "react";

const TextImageRight = (props) => {
	let shadow = "shadow"
	if (props.shadow === false) {
		shadow = ""
	}

	return (<div className="textimageright-component">

		<div className="content text">
			<div className="title">{props.title}</div>
			{props.link &&
				<a href={"#" + props.link} className=" link">learn more</a>
			}
			<div dangerouslySetInnerHTML={{ __html: props.content }}>

			</div>
		</div>

		<img
			className={`${props.tag1} ${shadow} viewport-hide`}
			src={props.img}
		/>

	</div>)
}

export default TextImageRight;

