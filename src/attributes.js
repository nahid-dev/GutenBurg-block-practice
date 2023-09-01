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
};

export default attributes;
