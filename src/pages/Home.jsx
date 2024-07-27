import React from "react";
import Triforce from "../components/Triforce"
import TextImageLeft from "../components/TextImageLeft";
import TextImageRight from "../components/TextImageRight";
import STORE from "../store";
import Banner from "../components/Banner";
import ReverseTriforce from "../components/ReverseTriforce";

const Home = (props) => {
	return (<div className="home-page">
		<Banner
			tag1={STORE.HomepageAnimationTags[0]}
		/>

		<Triforce
			tag1={STORE.HomepageAnimationTags[1]}
			tag2={STORE.HomepageAnimationTags[2]}
			tag3={STORE.HomepageAnimationTags[3]}
		/>

		<ReverseTriforce
			tag1={STORE.HomepageAnimationTags[4]}
			tag2={STORE.HomepageAnimationTags[5]}
			tag3={STORE.HomepageAnimationTags[6]}
		/>

		<TextImageLeft
			tag1={STORE.HomepageAnimationTags[7]}
		/>

		<TextImageRight
			tag1={STORE.HomepageAnimationTags[8]}
		/>

		<TextImageLeft
			tag1={STORE.HomepageAnimationTags[9]}
		/>
	</div>)

}

export default Home;
