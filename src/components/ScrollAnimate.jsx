import React, { useState } from "react";

const ScrollAnimate = () => {
	// const [animators, setAnimators] = useState({})
	// const [observer, setObserver] = useState(undefined)

	const initialize = (an) => {

		const ob = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				// console.log(entry.target, entry.isIntersecting)
				if (entry.isIntersecting) {
					entry.target.classList.add('viewport-animate');
				} else {
					entry.target.classList.remove('viewport-animate');
				}
			})
		});

		Object.keys(an).forEach(key => {
			try {
				let x = document.querySelector("." + key)
				if (x) {
					// console.log("OBSERVING:", key)
					ob.observe(x);
				}
			} catch (error) {
				console.dir(error)
			}
		})

		// setObserver(ob)
		// setAnimators(an)

	}

	return [initialize]
}

export default ScrollAnimate;


