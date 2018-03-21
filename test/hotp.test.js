/*
 * @Author: wuyanxin
 * @Date: 2018-03-21 22:25:23
 * @Last Modified by:   wuyanxin
 * @Last Modified time: 2018-03-21 22:25:23
 *
 * Test data from https://tools.ietf.org/html/rfc4226#page-32
 *
 * HOTP Algorithm: Test Values
 *
 *   The following test data uses the ASCII string
 *   "12345678901234567890" for the secret:
 *
 *   Secret = 0x3132333435363738393031323334353637383930
 *
 *   Table 1 details for each count, the intermediate HMAC value.
 *
 *   Count    Hexadecimal HMAC-SHA-1(secret, count)
 *   0        cc93cf18508d94934c64b65d8ba7667fb7cde4b0
 *   1        75a48a19d4cbe100644e8ac1397eea747a2d33ab
 *   2        0bacb7fa082fef30782211938bc1c5e70416ff44
 *   3        66c28227d03a2d5529262ff016a1e6ef76557ece
 *   4        a904c900a64b35909874b33e61c5938a8e15ed1c
 *   5        a37e783d7b7233c083d4f62926c7a25f238d0316
 *   6        bc9cd28561042c83f219324d3c607256c03272ae
 *   7        a4fb960c0bc06e1eabb804e5b397cdc4b45596fa
 *   8        1b3c89f65e6c9e883012052823443f048b4332db
 *   9        1637409809a679dc698207310c8c7fc07290d9e5
 *
 *   Table 2 details for each count the truncated values (both in
 *   hexadecimal and decimal) and then the HOTP value.
 *
 *                     Truncated
 *   Count    Hexadecimal    Decimal        HOTP
 *   0        4c93cf18       1284755224     755224
 *   1        41397eea       1094287082     287082
 *   2         82fef30        137359152     359152
 *   3        66ef7655       1726969429     969429
 *   4        61c5938a       1640338314     338314
 *   5        33c083d4        868254676     254676
 *   6        7256c032       1918287922     287922
 *   7         4e5b397         82162583     162583
 *   8        2823443f        673399871     399871
 *   9        2679dc69        645520489     520489
 */

const assert = require('assert');
const HOTP = require('../lib/hotp');

describe('HOTP', () => {
  const key = HOTP.base32.encode('12345678901234567890');

  it('shoule equal with the test values', () => {
    const hotp = new HOTP(key);
    assert('755224' === hotp.genOTP(0));
    assert('287082' === hotp.genOTP(1));
    assert('359152' === hotp.genOTP(2));
    assert('969429' === hotp.genOTP(3));
    assert('338314' === hotp.genOTP(4));
    assert('254676' === hotp.genOTP(5));
    assert('287922' === hotp.genOTP(6));
    assert('162583' === hotp.genOTP(7));
    assert('399871' === hotp.genOTP(8));
    assert('520489' === hotp.genOTP(9));
  });
});
