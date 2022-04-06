function cachingDecoratorNew(func) {
	let cache = [];

	return function(...args) {
		const hash = args.join(',');
		let idx = cache.findIndex( (item) => item.hash === hash );
	  // console.log(idx);

		if (idx !== -1 ) {
			console.log("Из кэша: " + cache[idx].value);
			return "Из кэша: " + cache[idx].value;
		}

		let result = func(...args);
		cache.push({hash: hash, value: result});
	  // console.log(cache);

		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result; 
	}
}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
