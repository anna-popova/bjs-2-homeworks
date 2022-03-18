function compareArrays(arr1, arr2) {

	let result;

	// не могу понять, как сравнить каждый элемент arr1 с каждым элементом из arr2 с помощью every
	// мой вариант ниже - но так не работает. 
	// if ( arr1.length === arr2.length && arr1.every(item => item === arr2.every(item => item)) ) {
	//   result = true;
	// } else {
	//   result = false;
	// }
	
	for (let i = 0; i < arr1.length; i++) {
	  for (let y = 0; y < arr2.length; y++) {
		 if (arr1.length === arr2.length && arr1[i] === arr2[y]) {
			result = true;
		 } else {
			result = false;
		 }
	  }
	}
 
	return result;
 }

 function advancedFilter(arr) {
	let resultArr = Array.from( arr.filter(item => item >= 0).filter(item => item % 3 === 0).map(item => item * 10) );
 
	return resultArr; // array
 }
