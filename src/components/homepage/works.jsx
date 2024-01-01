import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./nagarro.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Nagarro</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">Jan 2022 - Present</div>
						</div>

						<div className="work">
							<img
								src="./cerner.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Cerner Oracle</div>
							<div className="work-subtitle">
								Software Development Engineer -2
							</div>
							<div className="work-duration">Dec 2020 - Jan 2022</div>
						</div>

						<div className="work">
							<img
								src="./inube.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">iNube Software Solutions</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jan 2019 - Dec 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
