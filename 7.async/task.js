class AlarmClock {
	constructor() {
	  this.alarmCollection = [];
	  this.timerId;
	}
 
	addClock(time, action, id) {
	  if(id === null) {
		 throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
	  } 
	  
	  if(this.alarmCollection.find(alarm => alarm.id === id)) {
		 console.error('Будильник с таким id уже существует');
		 return this.alarmCollection;
	  } 
 
	  this.alarmCollection.push({id: id, time: time, callback: action});
	  
	}
 
	removeClock(id) {
	  this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
	}
 
	getCurrentFormattedTime() {
	  let date = new Date();
	  return `${date.getHours()}:${date.getMinutes()}`
	}
 
	start() {
		function checkClock(alarm) {
			alarm = this.alarmCollection.find(item => item.time === this.getCurrentFormattedTime());
			console.log(alarm.callback);
			//как вызвать функцию callback ?
			//alarm.callback(); не срабатывает
			//alarm.callback;
		}
		let checkClockBind = checkClock.bind(this);
		checkClockBind();

		if(this.timerId === undefined) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(alarm => checkClockBind(alarm));
				}, 1000);
		}
	}

}