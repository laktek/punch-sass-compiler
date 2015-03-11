var sass = require("node-sass");
var path = require("path");

module.exports = {
	input_extensions: [".sass", ".scss"],

    compile: function(input, filename, callback) {
        var options = { "includePaths": [ path.dirname(filename) ] };

        options.data = input;
        options.file = filename;


        sass.render( options, function (err, output) {

            var css = output.css.toString();
            return callback(err, css);
        });
    }

};
