import React from "react";

const Triforce = (props) => {
	return (
		<div className="triforce-component">

			<div className="item item1">

				<div className="content text">
					<div className="title">Title nr1</div>
					Some text about something or something. Maybe some more text
				</div>

				<img
					className={`viewport-hide ` + props.tag1}
					src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png"
				/>

			</div>

			<div className="item item2">

				<div className="content text">
					<div className="title">Title nr1</div>
					Some text about something or something. Maybe some more text
				</div>

				<img
					className={`viewport-hide ` + props.tag2}
					src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png"
				/>

			</div>

			<div className="item item3">

				<div className="content text">
					<div className="title">Title nr1</div>
					Some text about something or something. Maybe some more text
				</div>

				<img
					className={`viewport-hide ` + props.tag3}
					src="https://raw.githubusercontent.com/tunnels-is/media/master/v3/temp/clean-settings.png"
				/>

			</div>


		</div>)

}

export default Triforce;
