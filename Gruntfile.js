module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// combine js files
		concat: {
			js:{
				src: [
					'app/components/jquery/dist/jquery.min.js',
					'app/components/bootstrap/dist/js/bootstrap.min.js'
				],
				dest: 'app/dist/js/build.js'
			},
			css:{
				src: [
					'app/components/bootstrap/dist/css/bootstrap.min.css',
					'app/css/main.css'
				],
				dest: 'app/dist/css/build.css'
			}
		},
		uglify: {
			build: {
				src: 'app/dist/js/build.js',
				dest: 'app/dist/js/build.min.js'
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'app/dist/css/',
					src: ['*.css', '!*.min.css'],
					dest: 'app/dist/css/',
					ext: '.min.css'
				}]
			}
		},
		sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files
	        'app/css/main.css': 'app/css/main.scss'       // 'destination': 'source'
	      }
	    }
	  },
		watch: {
			styles: {
				files: ['app/css/*.scss'],
				tasks: ['sass', 'concat:css', 'cssmin'],
				options: {
					spawn: false,
				},
			},
      react: {
        files: 'app/js/**/*.jsx',
        tasks: ['browserify', 'react']
      }
    },
		react:{
			convert: {
				files: {
					'app/dist/js/app.built.js' : 'app/js/app.built.js'
				}
			}
		},
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      client: {
        src: ['app/js/**/*.jsx'],
        dest: 'app/js/app.built.js'
      }
    }
	});

	// tell grunt we are using this plugin
	grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-react');

	// tell grunt what to do when we run it
	grunt.registerTask('default', ['browserify', 'sass', 'concat', 'uglify', 'cssmin', 'react', 'watch']);
};
