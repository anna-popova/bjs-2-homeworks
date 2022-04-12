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

		wrapper.history.push(args);
		//в презентации в функции шпионе после строки 52 идет такая запись:
		//return func(...args);
		//но у нас вызов этой функции и так происходит на стр 62 и 58. тем более, в функции Debounce декоратор мы не 
		//используем return для func(...args);
		//не очень понимаю, как быть с этим моментом

		timeout = setTimeout( () => {
			func(...args);
		}, ms);

		if(!isDebounced) {
			func(...args);
			isDebounced = true;
		}
	}

	wrapper.history = [];
	return wrapper;
}
