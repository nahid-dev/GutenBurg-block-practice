import { Dashicon } from "@wordpress/components";
import React from "react";
import "./info.scss";

const Info = ({ title, icon }) => {
	return (
		<>
			<div className="info">
				<Dashicon icon={icon}></Dashicon>
				{title}
			</div>
		</>
	);
};

export default Info;
