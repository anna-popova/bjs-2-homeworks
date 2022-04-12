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


function debounceDecoratorNew(func, ms) {
	let isDebounced = false;
	let timeout;

	return function(...args) {
		clearTimeout(timeout);

		timeout = setTimeout( () => {
			func(...args);
		}, ms);

		if(!isDebounced) {
			func(...args);
			isDebounced = true;
		}
	}
}

function debounceDecorator2(func) {
	let isDebounced = false;
	let timeout;

	function wrapper(...args) {
		clearTimeout(timeout);

		timeout = setTimeout( () => {
			func(...args);
			//не уверена, нужно ли увеличивать здесь. это же все-таки отложенный вызов.
			//хотя, по условиям задания получается, что нужно, тк нет уточнения, когда и как она была вызвана:
			// мы хотим дополнительно знать, сколько всего раз была вызвана исходная функция
			wrapper.count += 1;
		}, ms);

		if(!isDebounced) {
			func(...args);
			wrapper.count += 1;
			isDebounced = true;
		}
	}

	wrapper.count = 0;
	
	return wrapper;
}
