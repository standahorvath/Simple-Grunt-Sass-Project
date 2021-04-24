module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //  SASS -> CSS:
	
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    // Minify css
	
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/main.min.css': ['css/style.css']
        }
      }
    },

    // Concat JS
	
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/jquery-3.5.1.min.js',
              'js/main.js'],
        dest: 'js/built.js',
      },
    },



    //Automatické spuštění tasků
    watch: {
      scripts: {
        files: ['index.html', 'scss/*.scss', 'scss/*/*.scss'/*, 'js/*.js'*/],
        tasks: ['sass','cssmin',  'concat',]
      },
    },

    //Reload prohlížeče
    browserSync: {
        bsFiles: {
            src : ['css/*.css','js/*.js', '*.html']
        },
        options: {
            watchTask: true,
            server: {
                baseDir: "./"
            }
        }
    }

});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-browser-sync');

grunt.registerTask('default', ['browserSync', 'watch']);

}
