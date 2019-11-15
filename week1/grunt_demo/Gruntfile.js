module.exports = function(grunt) {

  const mozjpeg = require('imagemin-mozjpeg');

  grunt.initConfig({
    src: 'assets',
    dest: 'public',
    js: {
      src: '<%= src %>/js',
      dest: '<%= dest %>/js'
    },
    css: {
      src: '<%= src %>/css',
      dest: '<%= dest %>/css'
    },

    clean: {
      fonts: {
        src: ['<%= dest %>/fonts']
      },
      css: {
        src: ['<%= dest %>/css']
      },
      js: {
        src: ['<%= dest %>/js']
      }
    },

    copy: {
      font: {
        expand: true,
        cwd: '<%= src %>/fonts',
        src: '**',
        dest: '<%= dest %>/fonts',
      },
    },

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= src %>/scss',
          src: ['*.scss'],
          dest: '<%= css.dest %>/compiled',
          ext: '.css'
        }]
      }
    },

    concat: {
      css: {
        src: [
          '<%= css.src %>/*.css',
          '<%= css.dest %>/compiled/app.css'
        ],
        dest: '<%= css.dest %>/app.css',
      },
      js: {
        src: [
          '<%= js.src %>/libs/*.js',
          '<%= js.src %>/register.js',
          '<%= js.src %>/app.js'
        ],
        dest: '<%= js.dest %>/app.js',
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= css.dest %>',
          src: ['app.css', '!*.min.css'],
          dest: '<%= css.dest %>',
          ext: '.min.css'
        }]
      }
    },

    uglify: {
      js: {
        files: {
          '<%= js.dest %>/app.min.js': ['<%= js.dest %>/app.js']
        }
      }
    },

    imagemin: {
      image: {
        files: [{
            expand: true,
            cwd: '<%= src %>/images',
            src: ['**/*.{png,jpg,jpeg,gif}'],
            dest: '<%= dest %>/img'
        }]
    }
    },

    watch: {
      files: [
        'Gruntfile.js',
        '<%= js.src %>/**/*.js',
        '<%= css.src %>/**/*.css',
        '<%= src %>/scss/**/*.scss'
      ],
      tasks: ['build'],
      options: {
        reload: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['clean', 'copy:font', 'sass', 'concat:css', 'concat:js', 'cssmin', 'uglify:js', 'imagemin']);
};