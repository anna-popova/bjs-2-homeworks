function compareArrays(arr1, arr2) {

	return arr1.length == arr2.length && arr1.every(isSimilar, arr2);

	function isSimilar(item, index) {
		return item === this[index];
	}
}

function advancedFilter(arr) {
	return arr.filter(item => item >= 0).filter(item => item % 3 === 0).map(item => item * 10);
}
