# Sass Compiler for Punch 

Use [Sass](http://sass-lang.com/) for CSS generation in your Punch projects. 

### How to Use 

* Install the package
	
		npm install punch-sass-compiler

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {

			"compilers": {
				".css": "punch-sass-compiler" 
			}

		}

* Now you can use Sass stylesheets in your project. 

	Make sure you **save the stylesheets with `.sass` or `.scss` extensions**.
