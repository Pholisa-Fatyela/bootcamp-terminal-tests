module.exports = function countAllFromTown(string,startString){
	var newString = string.split(",");
  	var newerString = [];
  	for(var i = 0 ; i < newString.length ; i++){
      var loopString = newString[i].trim();
      if(loopString.startsWith(startString)){
        newerString.push(loopString);
      }
    }
  return newerString.length;
}