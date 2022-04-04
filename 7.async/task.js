class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, action, id) {
		if(!id) {
			throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
		} 

		if(this.alarmCollection.some(alarm => alarm.id === id)) {
			console.error('Будильник с таким id уже существует');
			//возвращение не актуальное
			//!но если я не делаю return, то будильник с уже существующим id повторно записывается в alarmCollection
			//тогда не совсем понимаю, как это сделать: Программа должна продолжать работать, но звонок не должен быть добавлен.
			return this.alarmCollection;
		} 

		this.alarmCollection.push({id: id, time: time, callback: action});
	}

	removeClock(id) {
		let arrLengthBeforeRemove = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
		let arrLengthAfterRemove = this.alarmCollection.length;
		return true ? (arrLengthBeforeRemove > arrLengthAfterRemove) : false;
	}

	getCurrentFormattedTime() {
		//?возможно ли было так указать:
		// return new Date().toLocaleTimeString().slice(0,-3);
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		//переделала function checkClock(alarm) в стрелочню, чтобы не терять контекст и не исп bind
		checkClock((alarm) => {
			if(alarm.time === this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		});
		// function checkClock(alarm) {
		// 	if(alarm.time === this.getCurrentFormattedTime()) {
		// 		alarm.callback();
		// 	}
		// }
		// let checkClockBind = checkClock.bind(this);

		//Вызов checkClockBind(); не корректный, так как не передаётся никакого значения
		//получается, что он и не нужен, т.к. вы вызвали колбэк на стр. 42 ?
		// checkClockBind();

		if(!this.timerId) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(alarm => checkClockBind(alarm));
				}, 1000);
		}
	}

	stop() {
		if(!this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(alarm => {
			console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}