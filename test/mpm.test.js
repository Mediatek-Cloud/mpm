/**!
 * mpm - test/mpm.test.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var spawn = require('cross-spawn');
var should = require('should');
var path = require('path');
var fse = require('fs-extra');
var mpm = path.join(__dirname, '..', 'bin', 'mpm');
var fixtures = path.join(__dirname, 'fixtures');

describe('mpm.test.js', function () {
  it('should install padding', function (done) {
    var args = [
      mpm,
      'install',
      'pedding',
    ];
    if (process.env.TRAVIS) {
      args.push('--registry=https://registry.npmjs.org');
    }
    var child = spawn('node', args).on('exit', function (code) {
      code.should.equal(0);
      done();
    });
  });

  it('should user custom registry in userconf', function (done) {
    var args = [
      mpm,
      '--userconfig=' + path.join(fixtures, 'userconf'),
    ];
    var stdout = '';
    var child = spawn('node', args).on('exit', function (code) {
      stdout.should.containEql('npm command use --registry=http://127.0.0.1/registry');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });

  it('should --help user custom registry in userconf', function (done) {
    var args = [
      mpm,
      '--help',
      '--userconfig=' + path.join(fixtures, 'userconf'),
    ];
    var stdout = '';
    var child = spawn('node', args).on('exit', function (code) {
      stdout.should.containEql('npm command use --registry=http://127.0.0.1/registry');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });

  it('should user default registry in userconf dont contain registry', function (done) {
    var args = [
      mpm,
      '--userconfig=' + path.join(fixtures, 'userconf-no-registry'),
    ];
    var stdout = '';
    var child = spawn('node', args).on('exit', function (code) {
      stdout.should.containEql('npm command use --registry=http://10.130.33.70:7001/');
      code.should.equal(0);
      done();
    });
    child.stdout.on('data', function (data) {
      stdout += data.toString();
    });
  });
});
