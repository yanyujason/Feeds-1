var gulp = require('gulp');
//var jest = require('gulp-jest-iojs');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var jest = require('jest-cli');

//var paths = {
//  tests: 'spec/'
//};
//
//gulp.task('jest', function () {
//  return gulp.src(paths.tests)
//    .pipe(jest({
//      scriptPreprocessor: "../node_modules/gulp-jest-iojs/preprocessor.js",
//      unmockedModulePathPatterns: [
//        "../node_modules/react",
//        "../node_modules/fbjs",
//        "../node_modules/react-dom",
//        "../node_modules/react-addons-test-utils"
//      ],
//      testDirectoryName: "spec",
//      testPathIgnorePatterns: [
//        "node_modules"
//      ],
//      moduleFileExtensions: [
//        "js",
//        "react"
//      ]
//    }));
//});

var jestOptions = {
  rootDir: process.cwd(),
  testDirectoryName: 'spec',
  unmockedModulePathPatterns: [
    "node_modules/react",
    "node_modules/fbjs",
    "node_modules/react-dom",
    "node_modules/react-addons-test-utils"
  ],
  scriptPreprocessor: "node_modules/gulp-jest-iojs/preprocessor.js",
};

gulp.task('jest', function (callback) {
  jest.runCLI({config: jestOptions}, jestOptions.rootDir, function (success) {
    var error;
    if (success) {
      callback();
    } else {
      error = new Error('one or more tests failed');
      error.showStack = false;
      callback(error);
    }
  });
});

gulp.task('cleanJS', function () {
  return gulp.src('public/**/*.js', {read: false})
    .pipe(rimraf({force: true}));
});

gulp.task('concat', ['cleanJS'], function () {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('webpack', ['concat'], function () {
  return gulp.src('src/js/app.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      },
      output: {
        filename: 'main.js'
      }
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('cleanAssets', function () {
  return gulp.src(['public/fonts', 'public/img'], {read: false})
    .pipe(rimraf({force: true}));
});

gulp.task('copyAssets', ['cleanAssets'], function () {
  gulp.src('src/fonts/*')
    .pipe(gulp.dest('public/fonts'));
  gulp.src('src/img/*')
    .pipe(gulp.dest('public/img'));
});

gulp.task('cleanCSS', function () {
  return gulp.src('public/**/*.css', {read: false})
    .pipe(rimraf({force: true}));
});

gulp.task('copyCSS', ['cleanCSS'], function () {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass', function () {
  return gulp.src('src/css/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('cssmin', ['sass', 'copyCSS'], function () {
  return gulp.src('public/css/*.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('start', ['copyAssets', 'cssmin', 'webpack'], function () {
  return gulp.src('.')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('watch', function () {
  gulp.watch(['./src/js/**/*.js'], ['webpack']);
  gulp.watch(['./src/css/sass/*.scss'], ['cssmin']);
});

gulp.task('default', ['test']);

gulp.task('test', ['jest']);
