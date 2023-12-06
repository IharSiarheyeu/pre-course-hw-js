/* Создай рандомное число при помощи  
let number1 = Math.floor(Math.random() * 100)
 а затем проверь их выводя в консоль: «[вставь сюда полученное число] :Это четное число» или «[вставь сюда полученное число] 
 :Это нечетное число». С каждой перезагрузкой страницы у тебя будет новое число.​// code
 */

//  let number1 = Math.floor(Math.random() * 100);
 
//  if (number1 % 2 === 0) {
//   console.log('[',number1,']', ':Это четное число');
//   }
//   else {console.log('[',number1,']', ':Это нечетное число');
// };
// // code */

/* Имея в распоряжении только:
​let number = 1;
и используя лишь
--number   number--  ++number   number++
Получи в консоли 1,3,3,1 
Нужно вызвать консоль ЧЕТЫРЕ раза
Пример:
console.log(number**); 
console.log(**number); 
console.log(number**); 
console.log(**number); 
 */
let number = 1;
console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);