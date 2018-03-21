/*
 * @Author: wuyanxin
 * @Date: 2018-03-21 22:25:42
 * @Last Modified by: wuyanxin
 * @Last Modified time: 2018-03-21 22:42:28
 */

const HOTP = require('./hotp');

class TOTP extends HOTP {

  genOTP(timeStep = 30, t0 = 0) {
    const T = Math.floor((Date.now() / 1000 - t0) / timeStep);
    return super.genOTP(T);
  }

  verify(otp, timeStep = 30, t0 = 0) {
    return otp === this.genOTP(timeStep, t0);
  }

}

module.exports = TOTP;
