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
		    },
			// dist: {
			// 	files: {
			// 		'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
			// 	}
			// }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.registerTask('default', ['uglify']);
};