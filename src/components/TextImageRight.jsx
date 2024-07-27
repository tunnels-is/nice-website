import React from "react";

const TextImageRight = (props) => {
	return (<div className="textimageright-component">

		<div className="content text">
			<div className="title">Rant about things</div>
			Some text about something or something. Maybe some more text
		</div>

		<img
			className={props.tag1 + ` viewport-hide`}
			src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/W1.png"
		/>

	</div>)

}

export default TextImageRight;

