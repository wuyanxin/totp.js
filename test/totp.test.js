/*
 * @Author: wuyanxin
 * @Date: 2018-03-21 22:25:06
 * @Last Modified by: wuyanxin
 * @Last Modified time: 2018-03-21 23:06:53
 *
 * Test Vectors
 *
 *   This section provides test values that can be used for the HOTP time-
 *   based variant algorithm interoperability test.
 *
 *   The test token shared secret uses the ASCII string value
 *   "12345678901234567890".  With Time Step X = 30, and the Unix epoch as
 *   the initial value to count time steps, where T0 = 0, the TOTP
 *   algorithm will display the following values for specified modes and
 *   timestamps.
 *
 *  +-------------+--------------+------------------+----------+--------+
 *  |  Time (sec) |   UTC Time   | Value of T (hex) |   TOTP   |  Mode  |
 *  +-------------+--------------+------------------+----------+--------+
 *  |      59     |  1970-01-01  | 0000000000000001 | 94287082 |  SHA1  |
 *  |             |   00:00:59   |                  |          |        |
 *  |  1111111109 |  2005-03-18  | 00000000023523EC | 07081804 |  SHA1  |
 *  |             |   01:58:29   |                  |          |        |
 *  |  1111111111 |  2005-03-18  | 00000000023523ED | 14050471 |  SHA1  |
 *  |             |   01:58:31   |                  |          |        |
 *  |  1234567890 |  2009-02-13  | 000000000273EF07 | 89005924 |  SHA1  |
 *  |             |   23:31:30   |                  |          |        |
 *  |  2000000000 |  2033-05-18  | 0000000003F940AA | 69279037 |  SHA1  |
 *  |             |   03:33:20   |                  |          |        |
 *  | 20000000000 |  2603-10-11  | 0000000027BC86AA | 65353130 |  SHA1  |
 *  |             |   11:33:20   |                  |          |        |
 *  +-------------+--------------+------------------+----------+--------+
 *
 *  For dedails see https://tools.ietf.org/html/rfc6238#page-15
 */

const assert = require('assert');
const TOTP = require('../lib/totp');
const HOTP = require('../lib/hotp');

describe('TOTP', () => {
  const key = TOTP.base32.encode('12345678901234567890');
  const digit = 8;

  before(() => {
    Date.realNow = Date.now
  });
  after(() => {
    Date.now = Date.realNow
  })

  it('on unix time 59s', () => {
    Date.now = () => 59 * 1000;
    assert('94287082' === (new TOTP(key, digit)).genOTP());
  });
  it('on unix time 1111111109 sec', () => {
    Date.now = () => 1111111109 * 1000;
    assert('07081804' === (new TOTP(key, digit)).genOTP());
  });
  it('on unix time 1111111111 sec', () => {
    Date.now = () => 1111111111 * 1000;
    assert('14050471' === (new TOTP(key, digit)).genOTP());
  });
  it('on unix time 1234567890 sec', () => {
    Date.now = () => 1234567890 * 1000;
    assert('89005924' === (new TOTP(key, digit)).genOTP());
  });
  it('on unix time 2000000000 sec', () => {
    Date.now = () => 2000000000 * 1000;
    assert('69279037' === (new TOTP(key, digit)).genOTP());
  });
  it('on unix time 20000000000 sec', () => {
    Date.now = () => 20000000000 * 1000;
    assert('65353130' === (new TOTP(key, digit)).genOTP());
  });

});
