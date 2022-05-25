module.exports = function(config) {

	config.addPassthroughCopy("src/js");
	config.addPassthroughCopy("src/public");

	return {
		dir: {
			input: "src",
			output: "dist"
		}
	};


} 
