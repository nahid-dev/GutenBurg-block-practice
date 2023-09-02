const attributes = {
	uniqueID: {
		type: "string",
	},
	blockStyle: {
		type: "object",
	},
	content: {
		type: "string",
	},
	textColor: {
		type: "string",
		default: "#000000",
	},
	tag: {
		type: "string",
		default: "h2",
	},
	contentColor: {
		type: "string",
	},
	backgroundColor: {
		type: "string",
	},
	padding: {
		type: "object",
		default: {
			top: "10px",
			bottom: "10px",
			left: "10px",
			right: "10px",
		},
	},
	margin: {
		type: "object",
		default: {
			top: "10px",
			bottom: "10px",
		},
	},
	textAlign: {
		type: "string",
		default: "left",
	},
	radius: {
		type: "number",
		default: 0,
	},
	url: {
		type: "string",
	},
	alt: {
		type: "string",
	},
	id: {
		type: "number",
	},
};

export default attributes;
