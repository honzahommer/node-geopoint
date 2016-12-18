const decode = require('./decode')

module.exports = function (val) {
  const matches = decode(val)

  if (!matches)
    return NaN

  const deg = parseFloat(matches[1])
  const min = parseFloat(matches[2])
  const sec = parseFloat(matches[3])

  if (isNaN(deg) || isNaN(min) || isNaN(sec))
    return NaN

  return deg + (min / 60.0) + (sec / 3600)
}

