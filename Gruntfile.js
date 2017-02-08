module.exports = function(grunt){
  //load plugins
  [
    'grunt-cafe-mocha',
    'grunt-contrib-jshint',
    'grunt-sass',
    'grunt-contrib-watch',
    'grunt-nodemon',
    'grunt-concurrent'
  ].forEach(function(task){
    grunt.loadNpmTasks(task);
  });

  //config plugins
  grunt.initConfig({
    cafemocha: {
      all: {src: '/qa/tests-*.js', options: {ui: 'tdd'} }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    jshint: {
      app: ['app.js', 'public/js/**/*.js'],
      qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
    },
    nodemon: {
      dev: {
        script: './bin/www',
        options: {
          args: ['dev'],
          ext: 'js, hbs',
          nodeArgs: ['--debug'],
          callback: function(nodemon){
            nodemon.on('log', function(event){
              console.log(event.colour);
            });

            //open browser on initial server start
            nodemon.on('config:update', function(){
              setTimeout(function(){
                require('open')('http://localhost:9000');
              }, 500);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function(){
              //Delay before server listens on port
              setTimeout(function(){
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 500);
            });
          },
          env: {
            PORT: '9000'
          },
          ignore: ['node_modules/**']
        }
      }
    },
    sass: {
      options: {
        includePaths: require('bourbon-neat').includePaths
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'scss/',
          src: '*.scss',
          dest: 'public/css/',
          ext: '.css',
          sourcemap: 'auto'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
      server: {
        files: ['.rebooted'],
        options: {
          livereload: true
        }
      }
    }
  });

  // register tasks
  grunt.registerTask('default', ['cafemocha', 'concurrent:dev', 'jshint', 'nodemon', 'sass', 'watch']);

};
