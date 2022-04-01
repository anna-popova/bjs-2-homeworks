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
		 for(let i = 0; i < this.alarmCollection.length; i++) {
			alarm = this.alarmCollection[i];
			if(alarm.time === this.getCurrentFormattedTime()) {
			  return alarm.callback;
			}
 
			if(alarm.id === undefined) {
			  this.timerId = setInterval(function() {
				 this.alarmCollection.forEach(alarm => checkClockBind(alarm));
			  }, 1000);
			}
		 }
	  }
 
	  let checkClockBind = checkClock.bind(this);
	}
 
 
 
	
 }
 
 
 const alarm = new AlarmClock();
 // console.log(alarm);
 
 alarm.addClock('13:30', () => conslole.log('Пора вставать'), 1);
 // alarm.addClock('10:26', () => conslole.log('Пора вставать'), 1); //Будильник с таким id уже существует
 alarm.addClock('13:31', () => conslole.log('Скорее вставай'), 2);
 alarm.addClock('13:36', () => conslole.log('Уже надо встать!'), 3);
 alarm.addClock('13:45', () => conslole.log('Уже надо встать!')); //ошибка: нет id
 alarm.addClock('13:50', () => conslole.log('Вставай, а то проспишь!'), 4);
 // console.log(alarm);
 
 alarm.removeClock(3);
 alarm.removeClock(4);
 console.log(alarm);
 
 // console.log(alarm.getCurrentFormattedTime());
 // console.log(alarm.start());
 
 
 
 
 