import React from "react";

const ReverseTriforce = (props) => {
	return (
		<div className="reverse-triforce-component">

			<div className="item item1">

				<img
					className={`viewport-hide ` + props.tag1}
					src={props.img1}
				/>

				<div className="subtitle text">
					{props.content1}
				</div>
			</div>

			<div className="item item2">

				<img
					className={`viewport-hide ` + props.tag2}
					src={props.img2}
				/>
				<div className="subtitle text">
					{props.content2}
				</div>

			</div>

			<div className="item item3">

				<img
					className={`viewport-hide ` + props.tag3}
					src={props.img3}
				/>
				<div className="subtitle text">
					{props.content3}
				</div>

			</div>


		</div>)

}

export default ReverseTriforce;
