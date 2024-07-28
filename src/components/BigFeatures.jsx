import React from "react";

const BigFeatures = (props) => {
	return (<div className={"big-features"}>

		{props.features?.map(f => {
			return (
				<div key={f.Tag} className={`feature viewport-hide ${f.Tag} ${f.BG ? "feature-bg" : ""}`}>
					<div className="title-wrapper">
						<f.Icon height="2.5rem" width="2.5rem" />
						<h1 className="title">
							{f.Title}
						</h1>
					</div>
					<p className="content">
						{f.Content}
					</p>
				</div>
			)
		})}

	</div>)
}

export default BigFeatures;


