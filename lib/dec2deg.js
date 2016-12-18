const consts = require('./consts')

module.exports = function (val, max) {
  const sign = val < 0 ? -1 : 1
  const abs = Math.abs(Math.round(val * 1000000))

  if (abs > (max * 1000000))
    return NaN

  const dec = abs % 1000000 / 1000000
  const deg = Math.floor(abs / 1000000) * sign
  const min = Math.floor(dec * 60)
  const sec = (dec - min / 60) * 3600

  return deg + consts.CHAR_DEG + consts.CHAR_SEP + min + consts.CHAR_MIN + consts.CHAR_SEP + sec.toFixed(2) + consts.CHAR_SEC
}
