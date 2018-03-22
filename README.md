# totp.js
Two-factor authentication implementation in pure javascript. One-time password generator (HOTP/TOTP) with support for Google Authenticator.

[![Build Status](https://travis-ci.org/wuyanxin/totp.js.svg?branch=master)](https://travis-ci.org/wuyanxin/totp.js)
[![Node.js >= 8.x](https://img.shields.io/badge/node-%3E%3D8.x-green.svg)](https://nodejs.org)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## Live Demo
[Demo](https://wuyanxin.github.io/totp.js/demo/index.html)
<iframe src="https://wuyanxin.github.io/totp.js/demo/index.html" frameborder="0" scrolling="0" width="100%" height="300px"></iframe>

## Getting Started
### Install
> `npm i totp.js`
### Use
```javascript
const TOTP = require('totp.js');

// generate a base32 secret key
const key = TOTP.randomKey();
// 'GAXGGYT2OU2DEOJR'

const totp = new TOTP(key);
const code = totp.genOTP();
// '552179'
totp.verify(code)
// true

// generate Google Authenticator supported URL
totp.gaURL('handsome@totp.js', 'Totp.js')
// 'otpauth://totp/handsome@totp.js?issuer=Totp.js&secret=GAXGGYT2OU2DEOJR'

// OR
const totp2 = new TOTP(TOTP.base32.encode('your key'));
totp2.genOTP()
```
### For Browser
```html
<script src="./dist/totp.min.js"><script>
<script>
  var key = TOTP.randomKey();
  var totp = new TOTP(key);
  console.log(totp.genOTP());
</script>
```
Enjoy!


## Lisence
© MIT
