import React from "react";

const TextImageCenter = (props) => {
	let shadow = "shadow"
	if (props.shadow === false) {
		shadow = ""
	}
	return (<div className={`${props.className} textimagecenter-component`}>

		<div className={`content text`}>
			{props.link &&
				<a href={"#" + props.link} className="title link">{props.title}</a>
			}
			{!props.link &&
				<div className="title">{props.title}</div>
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

export default TextImageCenter;

