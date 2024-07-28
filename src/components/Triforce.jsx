import React from "react";

const Triforce = (props) => {
	return (
		<div className="triforce-component">

			<div className="item item1">

				<div className=" text subtitle">
					{props.content1}
				</div>

				<img
					className={`viewport-hide ` + props.tag1}
					src={props.img1}
				/>

			</div>

			<div className="item item2">

				<div className=" text subtitle">
					{props.content2}
				</div>

				<img
					className={`viewport-hide ` + props.tag2}
					src={props.img2}
				/>

			</div>

			<div className="item item3">

				<div className=" text subtitle">
					{props.content3}
				</div>

				<img
					className={`viewport-hide ` + props.tag3}
					src={props.img3}
				/>

			</div>


		</div>)

}

export default Triforce;
