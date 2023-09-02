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
	gallery: {
		type: "array",
	},
	titles: {
		type: "array",
		default: [],
	},
	icon: {
		type: "string",
		default: "wordpress",
	},
};

export default attributes;
