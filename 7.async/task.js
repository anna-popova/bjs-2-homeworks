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
		 if(this.alarmCollection.filter(alarm => alarm.time === this.getCurrentFormattedTime)) {
			return this.alarmCollection.callback();
		 } 
	  }
	}
	
 }
 
 const alarm = new AlarmClock();
 // console.log(alarm);
 
 alarm.addClock('10:27', () => conslole.log('Пора вставать'), 1);
 // alarm.addClock('10:26', () => conslole.log('Пора вставать'), 1); //Будильник с таким id уже существует
 alarm.addClock('10:27', () => conslole.log('Скорее вставай'), 2);
 alarm.addClock('10:28', () => conslole.log('Уже надо встать!'), 3);
 alarm.addClock('10:29', () => conslole.log('Уже надо встать!')); //ошибка: нет id
 alarm.addClock('10:30', () => conslole.log('Вставай, а то проспишь!'), 4);
 // console.log(alarm);
 
 alarm.removeClock(3);
 alarm.removeClock(4);
 console.log(alarm);
 
 // console.log(alarm.getCurrentFormattedTime());
 console.log(alarm.start());
 
 