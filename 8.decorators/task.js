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

		if(isDebounced) {
			return;
		}

		//В подсказде сказано: Вызывайте переданную функцию немедленно и взводите флаг.
		//Я это сделала. Но тогда вопрос, а что надо внутри setTimeout на стр. 44 делать?
		func(...args);
		isDebounced = true;

		timeout = setTimeout( () => {
			//функцию мы уже вызвали на стр. 41. Не понимаю, что надо сделать здесь?
			//просто снять флаг???
			isDebounced = false;
		}, ms)
	}
}

function debounceDecorator2(func) {
  // Ваш код
}
