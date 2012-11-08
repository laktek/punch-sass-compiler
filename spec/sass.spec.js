var sass = require("node-sass");
var sass_compiler = require("../lib/sass");

describe("calling compile", function() {

	it("pass the path to Sass compiler", function() {
		spyOn(sass, "render");

		var spyCallback = jasmine.createSpy();
		sass_compiler.compile("test", "sample/css/main.scss", spyCallback);

		expect(sass.render).toHaveBeenCalledWith("test", jasmine.any(Function), { "include_paths": [ "sample/css" ] });
	});

	it("calls the callback with the result", function(){
		spyOn(sass, "render").andCallFake(function(input, callback, options){
			return callback(null, "rendered file");
		});

		var spyCallback = jasmine.createSpy();
		sass_compiler.compile("test", "sample.scss", spyCallback);

		expect(spyCallback).toHaveBeenCalledWith(null, "rendered file");
	});

});
