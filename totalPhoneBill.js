module.exports = function totalPhoneBill(callAndSmslist) {
	const costPerCall = 2.75;
	const costPerSms = 0.65;

	var listOfActions = callAndSmslist.split(", ");
	console.log(listOfActions);

	var amountOfCalls = [];
	var amountOfSms = [];

	for (var i = 0; i < listOfActions.length; i++) {
		if (listOfActions[i] === "call") {
			amountOfCalls.push(listOfActions[i]);
		} else {
			amountOfSms.push(listOfActions[i]);
		}
	}

	var callBill = costPerCall * amountOfCalls.length;
	var smsBill = costPerSms * amountOfSms.length;
	var phoneBill = callBill + smsBill;
	var totalphoneBill = phoneBill.toFixed(2);
	
	return "R" + totalphoneBill;
}