import React from "react";

const TextImageLeft = (props) => {
	let shadow = "shadow"
	if (props.shadow === false) {
		shadow = ""
	}
	return (<div className={`${props.className} textimageleft-component`}>

		<img
			className={`${props.tag1} ${shadow} viewport-hide`}
			src={props.img}
		/>

		<div className={`content text`}>
			<div className="title">{props.title}</div>
			{props.link &&
				<a href={"#" + props.link} className="link">learn more</a>
			}
			<div dangerouslySetInnerHTML={{ __html: props.content }}>
			</div>
		</div>


	</div>)

}

export default TextImageLeft;

