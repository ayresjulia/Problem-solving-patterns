function freqCounter (str) {
	let frequency = {};
	for (let el of str) {
		frequency[el] = frequency[el] + 1 || 1;
	}
	return frequency;
}

function constructNote (msg, letters) {
	if (msg.length > letters.length) return false;
	const msgCounter = freqCounter(msg);
	const lettersCounter = freqCounter(letters);
	for (let char in msgCounter) {
		if (!lettersCounter[char]) return false;
		if (msgCounter[char] > lettersCounter[char]) return false;
	}
	return true;
}

module.exports = { freqCounter, constructNote };
