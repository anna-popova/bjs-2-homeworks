function compareArrays(arr1, arr2) {

	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);

	//решение с циклом
	// let result;
	// for (let i = 0; i < arr1.length; i++) {
	// 	for (let y = 0; y < arr2.length; y++) {
	// 	  if (arr1.length === arr2.length && arr1[i] === arr2[y]) {
	// 		 result = true;
	// 	  } else {
	// 		 result = false;
	// 	  }
	// 	}
	//  }
	//  return result;

	//решение с this
	// return arr1.length == arr2.length && arr1.every(isSimilar, arr2);
	// function isSimilar(item, index) {
	// 	return item === this[index];
	// }
}

function advancedFilter(arr) {
	return arr.filter(item => item >= 0).filter(item => item % 3 === 0).map(item => item * 10);
}
