module.exports = function(grunt) {

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
	    uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			build: {
		    	src: 'src/<%= pkg.name %>.<%= pkg.version %>.js',
				dest: 'build/<%= pkg.name %>.<%= pkg.version %>.min.js'
		    }
		},
		cssmin: {
			add_banner: {
				options: {
				  banner: '/* My minified css file */'
				},
				files: {
				  'build/<%= pkg.name %>.<%= pkg.version %>.min.css': 'src/*.css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.registerTask('default', ['uglify']);
};