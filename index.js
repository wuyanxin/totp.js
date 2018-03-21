/*
 * @Author: wuyanxin
 * @Date: 2018-03-21 23:12:14
 * @Last Modified by:   wuyanxin
 * @Last Modified time: 2018-03-21 23:12:14
 */

var HOTP = require('./lib/hotp')
var TOTP = require('./lib/totp')

TOTP.HOTP = HOTP

module.exports = TOTP;
