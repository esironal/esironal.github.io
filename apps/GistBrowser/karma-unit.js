module.exports = function ( karma ) {
    karma.set({
        basePath: '../',

        /**
         * This is the list of file patterns to load into the browser during testing.
         */
        files: [
            'vendor/jquery/jquery.min.js',
                'vendor/angular/angular.js',
                'vendor/angular-route/angular-route.min.js',
                'vendor/angular-animate/angular-animate.min.js',
                'vendor/bootstrap/dist/js/bootstrap.min.js',
                'vendor/lodash/dist/lodash.min.js',
                'vendor/restangular/dist/restangular.min.js',
                'build/templates-app.js',
                'vendor/angular-mocks/angular-mocks.js',
                
            'src/**/*.js'
  ],
  exclude: [
    'src/assets/**/*.js'
  ],
  frameworks: [ 'jasmine' ],
  plugins: [ 'karma-jasmine', 'karma-firefox-launcher', 'karma-chrome-launcher', 'karma-phantomjs-launcher' ],

  /**
   * How to report, by default.
   */
  reporters: 'dots',

  /**
   * On which port should the browser connect, on which port is the test runner
   * operating, and what is the URL path for the browser to use.
   */
  port: 9018,
  runnerPort: 9101,
  urlRoot: '/',

            /**
            * Disable file watching by default.
            */
            autoWatch: false,
            browsers: [
            'PhantomJS'
  ],
  // If browser does not capture in given timeout [ms], kill it
  captureTimeout: 5000
});
};