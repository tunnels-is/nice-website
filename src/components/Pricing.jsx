import React, { useEffect } from "react";
import STORE from "../store";
import ScrollAnimate from "./ScrollAnimate";

const Pricing = () => {
	const [initialize] = ScrollAnimate();

	useEffect(() => {
		initialize({ ["pricing-animate"]: true })
	})

	return (
		<div className={"pricing-component pricing-animate viewport-hide"}>



			<div className="pricing-wrapper">
				{STORE.Config.subs.map((s, i) => {
					return (
						<a className={`item item` + i} target="_blank" href={s.URL}>
							<div className="pricing-title">
								{s.Title}
							</div>
							<div className="price">
								<div className="symbol">$</div>
								<div className="value">{s.Price}</div>
								<div className="duration">/month</div>
							</div>

							<div className="bullet-list">
								{s.Included?.map((inc) => {
									return (
										<div className="bl-item">{inc}</div>
									)
								})}
							</div>

							<div className="register">{s.Button}</div>

						</a>
					)
				})}

			</div>

			<div className="title">
				<a className="link"
					target="_blank"
					href={STORE.Config.AnonKey.URL}
				>
					{STORE.Config.AnonKey.Title}
				</a>
			</div>
		</div>
	)
}

export default Pricing;


