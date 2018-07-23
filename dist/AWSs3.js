/**
 * NOTE: This code is transpiled from ES2017 using Babel.
 * Instead of modifying this file directly, work with the source code instead and upload the transpiled output here.
 */'use strict';

var _utilities = require('utilities');

var _utilities2 = _interopRequireDefault(_utilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = class AwsS3 {
  constructor(AWS, service) {
    this.s3 = new AWS.S3();
    this.bucketName = service.bucketName;
  }

  put(params) {
    return this.s3.putObject(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  }

  get(params) {
    return this.s3.getObject(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  }

  list(params) {
    return new Promise((yes, no) => {
      this.s3.listObjectsV2(params, function (err, response) {
        return yes(response.Contents);
      });
    });
  }

  prepParams(paraType, content, name, outputType) {

    switch (paraType) {
      case 'put':
        return {
          Body: content,
          Bucket: this.bucketName,
          Key: _utilities2.default.formatGitName('reports/', name, outputType)
        };
      case 'get':
        return {
          Body: content,
          Bucket: this.bucketName,
          Key: _utilities2.default.formatGitName('reports/', name, outputType)
        };
      case 'list':
        return {
          Bucket: this.bucketName,
          Prefix: 'reports/'
        };
    }
  }

};