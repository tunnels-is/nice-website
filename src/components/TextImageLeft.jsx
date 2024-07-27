import React from "react";

const TextImageLeft = (props) => {
	return (<div className="textimageleft-component">

		<img
			className={props.tag1 + ` viewport-hide`}
			src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
		/>

		<div className={`content text`}>
			<div className="title">Rant about things</div>
			Some text about something or something. Maybe some more text
		</div>


	</div>)

}

export default TextImageLeft;

