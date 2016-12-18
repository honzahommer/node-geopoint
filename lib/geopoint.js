const consts = require('./consts')
const decode = require('./decode')
const dec2deg = require('./dec2deg')
const deg2dec = require('./deg2dec')

module.exports = function (lat, lng) {
  var res = { lat, lng },
      arg, obj, max, val

  for (arg in res) {
    if (!res.hasOwnProperty(arg))
      continue

    max = consts['MAX_' + arg.toUpperCase()]
    val = res[arg]
    obj = { dec: NaN, deg: NaN }

    switch (typeof val) {
      case 'number':
        obj.dec = val
        obj.deg = dec2deg(val, max)

        break
      case 'string':
        obj.dec = deg2dec(val, max)

        if (decode(val))
          obj.deg = val

        break
    }

    res[arg] = obj
  }

  return res
}
