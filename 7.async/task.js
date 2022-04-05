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
			return;
		} 

		this.alarmCollection.push({id: id, time: time, callback: action});
	}

	removeClock(id) {
		let arrLengthBeforeRemove = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
		let arrLengthAfterRemove = this.alarmCollection.length;

		return arrLengthBeforeRemove > arrLengthAfterRemove;
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		// можно исп стрелочную функцию. тогда на стр. 56 надо переписать на checkClock(alarm)
		// const checkClock = (alarm) => {
		// 	if(alarm.time === this.getCurrentFormattedTime()) {
		// 		alarm.callback();
		// 	}
		// };

		function checkClock(alarm) {
			if(alarm.time === this.getCurrentFormattedTime()) {
				alarm.callback();
			}
		}
		let checkClockBind = checkClock.bind(this);

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

