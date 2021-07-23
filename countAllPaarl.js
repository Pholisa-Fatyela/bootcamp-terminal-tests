module.exports = function countAllPaarl(string){
	var newString = string.split(", ");
  	var paarlRegNumbers = [];
  	for(var i = 0 ; i < newString.length ; i++){
      var loopString = newString[i];
      if(loopString.startsWith('CJ')){
        paarlRegNumbers.push(loopString);
      }
    }
  	return paarlRegNumbers.length;
}