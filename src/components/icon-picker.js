import React from "react";

const icons = [
	{
		name: "Wordpress",
		value: "wordpress",
	},
	{
		name: "Facebook",
		value: "facebook",
	},
	{
		name: "Twitter",
		value: "twitter",
	},
];

const IconPicker = ({ attrName, attrValue, setAttributes }) => {
	return (
		<div className="icon-picker-wrapper">
			<h3>Selected Icon</h3>
			<div className="selected-icon">
				<span className={`dashicons dashicons-${attrValue}`}></span>
			</div>
			<div className="icons-list">
				{icons &&
					icons.map((icon, index) => {
						return (
							<div key={index} className="icon-item">
								<button
									onClick={() =>
										setAttributes({
											[attrName]: icon.value,
										})
									}
								>
									<span className={`dashicons dashicons-${icon.value}`}></span>
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default IconPicker;
