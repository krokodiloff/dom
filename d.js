// ZADANIE3
// const getInp = document.querySelector('.n3');

// getInp.addEventListener('blur', func);

// function func() {
//     const arrFromValue = getInp.value.split('');
//     let sum = 0;
//     for (let i = 0; i < arrFromValue.length; i += 1) {
//         sum += Number(arrFromValue[i]);
//     }
//     console.log(sum);

// ZADANIE4
// };
// const getInp = document.querySelector('.n4');

// getInp.addEventListener('blur', func);

// function func() {
//     const arrFromValue = getInp.value.split(',');
//     let sum = 0;
//     let result = 0;
//     for (let i = 0; i < arrFromValue.length; i += 1) {
//         sum += Number(arrFromValue[i]);
//     }

//     result = sum / arrFromValue.length;
//     console.log(result);
// };

// ZADANIE5
// const getInp = document.querySelector('.n5');
// const getDiv = document.querySelector('.div');

// getInp.addEventListener('blur', func);

// function func() {
//     const arrFromValue = getInp.value.split(' ');

//     for (let i = 0; i < arrFromValue.length; i += 1) {
//         const createInput = document.createElement('input');
//         createInput.value = arrFromValue[i];
//         getDiv.appendChild(createInput);
//     }
// };
//  zadanie6
// const getInp = document.querySelector('.n6');

//         getInp.addEventListener('blur', func);

//         const makeFirstUpper = argStr => {
//             const arrFromValue = argStr.split('');
//             arrFromValue[0] = arrFromValue[0].toUpperCase();
//             return arrFromValue.join('');
//         };

//         function func() {
//             const arrFromValue = getInp.value.split(' ');

//             let result = '';

//             for (let i = 0; i < arrFromValue.length; i += 1) {
//                 result += makeFirstUpper(arrFromValue[i]) + ' ';
//             }
//             console.log(result);
//         }
// zadanie7
// const getInp = document.querySelector('.n7');

// getInp.addEventListener('blur', func);

// function func() {
//     const arrFromValue = getInp.value.split(' ');
//     console.log (arrFromValue.length);
// };
// zadanie8
// const getInp = document.querySelector('.n8');

// getInp.addEventListener('blur', func);

// function func() {
//     const arrFromValue = getInp.value.split('.');
//     const out = `${arrFromValue[2]}-${arrFromValue[1]}-${arrFromValue[0]}`;
//     getInp.value = out;
// };
// zadanie9
// const getInp = document.querySelector('.n9');
//         const getBtn = document.querySelector('.btn');

//         getBtn.addEventListener('click', func);

//         function func() {
//             const arrFromStr = [...getInp.value];

//             for (let i = 0; i < Math.ceil(arrFromStr.length / 2); i += 1) {
//                 if (arrFromStr[i] !== arrFromStr.reverse()[i]) {
//                     console.log('Не получится');
//                     return null;
//                 }
//             }
//             console.log('Ошибка:Успех');
//         };
// zadanie10
// const getInp = document.querySelector('.n10');

// input.addEventListener('blur', hasThree);

//   function hasThree() {
//     let arr = input.value.split('');
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === '3') {
// return console.log("da")
// }
//     }
//     return console.log("net");
// }
// zadanie11
// const getDiv = document.querySelector('.sdh');
//         const getBtn = document.querySelector('.btn');

//         getBtn.addEventListener('click', func);

//         function func() {
//             const getAllP = getDiv.querySelectorAll('p');

//             getAllP.forEach((elem, num) => elem.innerHTML = elem.innerHTML + ' ' + num);
//         };
// zadanie12
// const getDiv = document.querySelector('.divan');

// document.addEventListener('DOMContentLoaded', func);

// function func() {
//     const getAllA = getDiv.querySelectorAll('a');

//     getAllA.forEach(elem => elem.innerHTML = elem.innerHTML + '( ' + elem.href + ")");
// };
// zadanie13
// const getDiv = document.querySelector('.diver');

// document.addEventListener('DOMContentLoaded', func);

// function func() {
//     const getAllA = getDiv.querySelectorAll('a');

//     getAllA.forEach(elem => {
//         if (elem.href.substr(0, 7) === 'http://')
//             elem.innerHTML = elem.innerHTML + '&rarr;';
//     });
// };
// zadanie14
// const getDiv = document.querySelector('.drive');

// getDiv.addEventListener('click', func);

// function func(event) {
//     event.target.innerHTML = event.target.innerHTML * event.target.innerHTML;
// };
// zadanie15
// const getInp = document.querySelector('.n15');

// getInp.addEventListener('blur', func);

// const addZero = argNum => {
//     if (argNum <= 9) {
//         argNum = '0' + argNum;
//     }
//     return argNum;
// };

// function func() {
//     const arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
//     const arrFromValue = getInp.value.split('.');
//     const date = new Date(+arrFromValue[2], addZero(+arrFromValue[1] - 1), addZero(+arrFromValue[0]));

//     console.log(arr[date.getDay()]);
// };
// zadanie16
// const getInp = document.querySelector('.nbg');
//         const getInpPlus = document.querySelector('.plus');
//         const getMinus = document.querySelector('.minus');

//         getInpPlus.addEventListener('click', func1);
//         getMinus.addEventListener('click', func2);

//         function func1() {
//             getInp.value = +getInp.value + 1;
//         };

//         function func2() {
//             if (+getInp.value > 0)
//                 getInp.value = +getInp.value - 1;
//         };
// zadanie17
// let paragraph = document.querySelectorAll('#n17 p');
//   let input = document.querySelector('#n17 input[name=result]');

//   for (let i = 0; i < paragraph.length; i++) {
//     paragraph[i].addEventListener('click', func);
//   }

//   let count = 0;

//   function func() {
//     count++;
//     input.value = count;
//   }
// zadanie18
// let div = document.querySelectorAll('#n18 div');
// let btn = document.querySelector('#n18 button');

// btn.addEventListener('click', cut);

// function cut() {

//   for (let i = 0; i < div.length; i++) {
//     div[i].innerHTML = div[i].innerHTML.slice(0, 10) + '...';
//   }

// }
// zadanie19
// let input = document.querySelector('#n19 input[name=nu]');

//   input.addEventListener('blur', checkNumber);

//   function checkNumber() {
//     if (this.value >= 1 && this.value <= 100) {
//       this.style.border = '50px solid green';
//     } else {
//       this.style.border = '50px solid red';
//     }
//   }
// zadanie20
// let input = document.querySelector('#n20 input[name=rndm]');
//   let btn = document.querySelector('#n20 button');

//   btn.addEventListener('click', random);

//   function random() {
//     let str = '';
//     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     for (let i = 0; i < 8; i++) {
//       str += possible.charAt(Math.floor(Math.random() * possible.length));
//     }

//     input.value = str;
//   }
