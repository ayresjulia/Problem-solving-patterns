function freqCount (nums) {
	let frequency = {};
	for (let n of Array.from(String(nums), Number)) {
		frequency[n] = frequency[n] + 1 || 1;
	}
	return frequency;
}

function sameFrequency (nums1, nums2) {
	if (nums1.length !== nums2.length) return false;

	const nums1Freq = freqCount(nums1);
	const nums2Freq = freqCount(nums2);

	for (let el in nums1Freq) {
		if (!nums2Freq[el]) return false;
		if (nums1Freq[el] !== nums2Freq[el]) return false;
	}
	return true;
}

module.exports = { sameFrequency };
