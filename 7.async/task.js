class AlarmClock {
	constructor() {
	  this.alarmCollection = [];
	  this.timerId;
	}
 
	addClock(time, action, id) {
	  if(id === null) {
		 throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
	  } 
	  
	  if(this.alarmCollection.find(item => item.id === id)) {
		 console.error('Будильник с таким id уже существует');
		 return this.alarmCollection;
	  } 
 
	  this.alarmCollection.push({id: id, time: time, callback: action});
	  
	}
 
	removeClock(id) {
	  this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
 
	  
	}
 
 
	
 }
 
 const alarm = new AlarmClock();
 // console.log(alarm);
 
 alarm.addClock('09:10', () => conslole.log('Пора вставать'), 1);
 alarm.addClock('09:20', () => conslole.log('Пора вставать'), 1); //Будильник с таким id уже существует
 alarm.addClock('09:20', () => conslole.log('Пора вставать'), 2);
 alarm.addClock('09:30', () => conslole.log('Пора вставать'), 3);
 alarm.addClock('09:30', () => conslole.log('Пора вставать')); //ошибка: нет id
 alarm.addClock('09:40', () => conslole.log('Пора вставать'), 4);
 console.log(alarm);
 
 alarm.removeClock(3);
 console.log(alarm);
 