import React from "react";

const SmallFeatures = (props) => {
	return (<div className={"small-features"}>

		{props.features?.map(f => {
			return (
				<div key={f.Tag} className={`feature viewport-hide ${f.Tag} ${f.BG ? "feature-bg" : ""}`}>
					<f.Icon height="50px" width="50px" />
					<p className="content">
						{f.Content}
					</p>
				</div>
			)
		})}

	</div>)
}

export default SmallFeatures;


