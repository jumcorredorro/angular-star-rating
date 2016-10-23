/**
 * main.js
 *
 * This file requires following npm modules:
 * ``
 * npm install gulp gulp-run-sequence merge-stream gulp-inject --save-dev
 * ``
 *
 * This files bundles several tasks from the tasks folder
 *
 *
 */

'use strict';

var gulp = require('gulp'),
  helper = require('../helper'),
  merge = require('merge-stream');

var autogeneratedFolders = ['dist', 'styleguide'];

//////////////////

//clean all but lib folder in www
gulp.task('project:clean', function (done) {
  helper.log('delete all autogenerated files and folders');
  return helper.clean([autogeneratedFolders], done);
});