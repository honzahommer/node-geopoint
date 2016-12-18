const consts = require('./consts')

module.exports = function (val) {
  let pattern = "(-?\\d+)";
  pattern += consts.CHAR_DEG;
  pattern += "\\s*";
  pattern += "(\\d+)";
  pattern += consts.CHAR_MIN;
  pattern += "\\s*";
  pattern += "(\\d+(?:\\.\\d+)?)";
  pattern += consts.CHAR_SEC;

  return String(val).match(new RegExp(pattern))
}

