import React from "react";

const BigFeatures = (props) => {
	return (<div className={"big-features"}>

		{props.features?.map(f => {
			return (
				<div key={f.Tag} className={`feature viewport-hide ${f.Tag} ${f.BG ? "feature-bg" : ""}`}>
					<h1 className="title">
						{f.Title}
					</h1>
					<p className="content">
						{f.Content}
					</p>
				</div>
			)
		})}

	</div>)
}

export default BigFeatures;


