function isSubsequence (str1, str2, i = 0, j = 0) {
	while (i < str1.length) {
		if (j === str2.length) {
			return false;
		}
		if (str1[i] === str2[j]) {
			i++;
		} else {
			j++;
		}
	}
	return true;
}

module.exports = { isSubsequence };
