module.exports = function findItemsOver(listOfObjects, threshold) {
  var newQuantityObjectList = [];
  for (var i = 0; i < listOfObjects.length; i++) {
    var listItemQty = listOfObjects[i].qty;
    if (listItemQty > threshold) {
      newQuantityObjectList.push(listOfObjects[i]);
    }
  }
  return newQuantityObjectList.length;
}