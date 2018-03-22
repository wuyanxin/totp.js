/*!
 * Two-factor authentication implementation in pure javascript.
 * One-time password generator (HOTP/TOTP) with support for Google Authenticator.
 *
 * @author   wuyanxin <https://wuyanxin.com>
 * @license  MIT
 */

var HOTP = require('./lib/hotp')
var TOTP = require('./lib/totp')

TOTP.HOTP = HOTP

module.exports = TOTP;
