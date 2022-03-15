// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let item of arr) {
    if (item > max) max = item;
    if (item < min) min = item;
    sum += item
  }

  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let item of arr) {
   sum += item;
  }

  return sum;
}

function makeWork(arrOfArr, func) {
   let max = 0;

   for (let item of arrOfArr) {
   let sum = func(item);
   if (sum > max)  max = sum;
   }
   
   return max;
}

// Задание 3
function worker2(arr) {
   let min = arr[0];
   let max = arr[0];
 
   for (let item of arr) {
     if (item < min) min = item;
     if (item > max) max = item;
   }
 
   return max - min;  
}
