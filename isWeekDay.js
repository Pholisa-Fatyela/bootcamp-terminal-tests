module.exports = function isWeekDay(day) {
	if (day.startsWith('S')) {
		return false;
	} else {
		return true;
	}
}
