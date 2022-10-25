// var userName = prompt('Ismingiz nima? ')
// var userAge = +prompt('Yoshingiz nechida? ')
// console.info ('Sizning ismingiz ' + userName  + ' / Sizning yoshingiz ' + userAge + ' da!')
// var plus = +prompt('6 + 8 = ')
// alert('Sizning javobingiz - ' + plus + ' / To"g"ri javob:  6 + 8 = 14')
// var minus = +prompt('76 - 23 = ')
// alert('Sizning javobingiz - ' + minus + ' / To"g"ri javob:  76 - 23 = 53')
// var kopay = +prompt('12 * 3 = ')
// alert('Sizning javobingiz - ' + kopay + ' / To"g"ri javob:  12 * 3 = 36')
// var bol = +prompt('33 / 11 = ')
// alert('Sizning javobingiz - ' + bol + ' / To"g"ri javob:  33 / 11 = 3')
// var qoldiq = +prompt('45 % 4 = ')
// alert('Sizning javobingiz - ' + qoldiq + ' / To"g"ri javob:  45 % 4 = 1')
// var daraja = +prompt('2 ** 4 = ')
// alert('Sizning javobingiz - ' + daraja + ' / To"g"ri javob:  2 ** 4 = 16')
// var tochka = +prompt('10 / 3 = ')
// alert('Sizning javobingiz - ' + tochka + ' / To"g"ri javob:  10 / 3 = 3.33333333')
// var info = 'Sizning javoblaringiz:'
// console.info(plus, minus, kopay, bol, qoldiq, daraja, tochka)

/* ___________________Yosh__________________________________ */

var num1 = +prompt('Yoshingizni raqamda kiriting: ')
if (num1 > 0 && num1<=18) {alert('San hali yoshsan. Uqishing kerak')}
else if (num1 > 18 && num1<=50) {alert('Siz ishlashingiz kerak')}
else if (num1 > 50 && num1<=59) {alert('Siz choyhonaga boring')}
else if (num1 > 59 && num1<=150) {alert('Siz tayyorgarlik koring')}
else {(!isNaN(num1)) 
    alert('Siz yoshingizni raqamda kiritmadingiz!!!')}

/* ____________________Soat_________________________________ */

var num1 = +prompt('Vaqtni kiriting: ')
if (num1 == 0) {alert('Tungi soat: 12')}
if (num1 >= 1 && num1 <= 3) {alert('Tungi soat: ' + num1)}
if (num1 > 3 && num1 <= 8) {alert('Tonggi soat: ' + num1)}
if (num1 > 8 && num1 <= 12) {alert('Ertalabki soat: ' + num1)}
if (num1 > 12 && num1 <= 18) {alert('Kunduzgi soat: ' + (num1 - 12))}
if (num1 > 18 && num1 <= 21) {alert('Kechki soat: ' + (num1 - 12))}
if (num1 > 21 && num1 <= 24) {alert('Tungi soat: ' + (num1 - 12))}
else if(isNaN(num1)) {alert('Notugri kiritdingiz!!!')}
else {alert('Nimadir notugri kiritdingiz!!!')}



/* ____________________Urta son topish_______________________ */

var num1 = +prompt('Son kiriting: ')
var num2 = +prompt('Yana son kiriting: ')
var num3 = +prompt('Va yana son kiriting: ')
if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {alert('Orta son: ' + num1)}
else if ((num1 < num2 && num2 < num3) || (num3 < num2 && num2 < num1)) {alert('Orta son: ' + num2)}
else if ((num1 < num3 && num3 < num2) || (num2 < num3 && num3 < num1)) {alert('Orta son: ' + num3)}

else { if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {alert('Siz umuman son kiritmadingiz!!!')}
else if (isNaN(num1)) {alert('Son emas!')}
else if (isNaN(num2)){alert('Son emas!')}
else{alert('Son emas!')}}
















