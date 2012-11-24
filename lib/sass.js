var sass = require("node-sass");
var path = require("path");

module.exports = {
	input_extensions: [".sass", ".scss"],
	force_compile: true,

	compile: function(input, filename, callback) {
		var options = { "include_paths": [ path.dirname(filename) ] };
		sass.render( input, function (err, output) {
			return callback(err, output);
		}, options );
	}

};
