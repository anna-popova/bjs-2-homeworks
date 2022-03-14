'use strict'

function solveEquation(a, b, c) {
	let arr;
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		arr = [];
	} else if (discriminant === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [(-b + Math.sqrt(discriminant) ) / (2 * a), (-b - Math.sqrt(discriminant) ) / (2 * a)];
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;

	// Проконтролируйте корректность введенных данных
	if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	if (isNaN(contribution)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}

	//Преобразование введенных данных к числу
	percent = +(percent / 100);
	contribution = +contribution;
	amount = +amount;

	//Посчитайте тело кредита: сумма, которую необходимо вернуть банку
	let creditBody = amount - contribution;
	console.log(creditBody);

	//Посчитайте на какой срок был выдан кредит (в месяцах)
	let currentMonth = new Date().getMonth();
	let currentYear = new Date().getFullYear();
	let yearsGap = date.getFullYear() - currentYear;
	//количество месяцев = разница в годах * 12 - текущий месяц + месяц пришедший из даты;
	let monthsGap = yearsGap * 12 - currentMonth + date.getMonth();
	console.log(monthsGap);

	//Ежемесячная оплата
	// Платеж = S * (P + (P / (((1 + P)^n) - 1))), где: 
	// S - тело кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев ^ - возведение в степень
	let partOfpercent = percent / 12;
	console.log(partOfpercent);
	let monthPayment = creditBody * (partOfpercent + (partOfpercent / (((1 + partOfpercent) ** monthsGap) - 1)));
	console.log(monthPayment);

	//Посчитайте общую сумму, которую придется заплатить клиенту.Округлите результат до двух значений после запятой
	totalAmount = +(monthPayment * monthsGap).toFixed(2);

	//Выведите результат в консоль, а также верните его из функции
	console.log(totalAmount);
	return totalAmount;
}
