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
		//В этом декораторе каждый новый вызов должен сбрасывать предыдущий таймаут
		clearTimeout(timeout);

		//и создавать новый таймаут, в котором необходимо вызывать функцию (то есть выполнять асинхронный вызов)
		timeout = setTimeout( () => {
			func(...args);
			//соответственно, т.к. функцию вызываем, флаг переключаем на true
			isDebounced = true;
		}, ms);

		//и только после этих действий проверять флаг: если он опущен, то синхронно вызывать полученную функцию
		if(!isDebounced) {
			func(...args);
			//соответственно, т.к. функцию вызываем, флаг переключаем на true
			isDebounced = true;
		}
	}
}

function debounceDecorator2(func) {
  // Ваш код
}
