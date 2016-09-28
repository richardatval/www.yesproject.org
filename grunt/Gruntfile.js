module.exports = function(grunt) {
		// This is where we configure each task that we'd like to run.
		grunt.initConfig({
				pkg: grunt.file.readJSON('package.json'),
				pages: {
					options: {
						options: {
							dest: '.jekyll',
							drafts: true
						}
					},
				dist: { // Target 
						options: { // Target options 
							dest: '<%= dist %>',
							config: '_config.yml,_config.build.yml'
						}
					},
				});
			// This is where we tell Grunt we plan to use this plug-in.
			grunt.loadNpmTasks('grunt-jekyll-pages');
			// Now that we've loaded the package.json and the node_modules we set the base path
			// for the actual execution of the tasks
			grunt.file.setBase('../')
			// This is where we tell Grunt what to do when we type "grunt" into the terminal.
			// Note. if you'd like to run and of the tasks individually you can do so by typing 'grunt mytaskname' alternatively
			// you can type 'grunt watch' to automatically track your files for changes.
			grunt.registerTask('default', ['pages']);
		};
