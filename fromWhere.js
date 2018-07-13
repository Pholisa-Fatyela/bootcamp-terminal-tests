module.exports = function fromWhere(vrn) {
  if (vrn.startsWith('CY')) {
    return "Bellville";
  } else if (vrn.startsWith('CJ')) {
    return "Paarl";
  } else if (vrn.startsWith('CA')) {
    return "Cape Town";
  } else {
    return "Some other place!";
  }
}