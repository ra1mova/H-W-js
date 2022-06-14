// задача 1

let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

//задача 3

let arr1 = [3, 12, 77, 52, 108, 87];
let min = Math.min(...arr1);
let max = Math.max(...arr1);
console.log(min + '-' + max);

//задача 2

function func1(n1, n2, n3, n4, n5, n6, n7, n8) { return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8); }
console.log( func1(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );
260

// задача 1

let arr2 = [1, 2, 3]; let arr3 = [4, 5, 6]; let arr4 = ['a', ...arr2, 'b', 'c', ...arr3]; console.log(arr4);
['a', 1, 2, 3, 'b', 'c', 4, 5, 6]

// задача 2

let arr5 = [1, 2, 3]; let arr6 = [4, 5, 6];
let arr7 = ['a', ...arr5, ...arr5, 'b', 'c']; console.log(arr7);
['a', 1, 2, 3, 4, 5, 6, 'b', 'c']

//задача 3

let arr8 = [1, 2, 3]; let arr9 = [...arr8, 4, 5, 6];
let arr10 = ['a', 'b', 'c', ...arr9]; console.log(arr10);
['a', 'b', 'c', 1, 2, 3, 4, 5, 6]

// задача 4

let options = {
    width: 400,
    height: 500,
    };
    let{width, height, color = 'black'} = options;
    console.log(width + ', ' + height + ', ' + color );

// задача 1

let items = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let[name, surname, department, position, salary] = items;
console.log(name + ', ' + surname + ', ' + department + ', ' + position + ', ' + salary);

//задача 4

let items1 = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let[name1,surname1,...info] = items1;
console.log(name1 + ', ' + surname1 + ', ' + info);

//задача 5

let items2 = ['Иван', 'Иванов', 'отдел разработки'];
let[name2, surname2, department2, position2 = 'джуниор'] = items2;
console.log(name2 + ', ' + surname2 + ', ' + department2 + ', ' + position2 );

//задача 1

let options1 = {
    color1: 'red',
    width1: 400,
    height1: 500,
    };
    
    
let {color1, width1, height1} = options1;
console.log(color1 + ', ' + width1 + ', ' + height1 );

//задача 2

let options2 = {
    color: 'red',
    width: 400,
    height: 500,
    };
    let{color: c, width: w, height: h} = options2;
    
    console.log(c + ', ' + w + ', ' + h );

//задача 3
// let options = {
//     width: 400,
//     height: 500,
//     };
//     let{width, height, color = 'black'} = options;
//     console.log(width + ', ' + height + ', ' + color );



//задача 4

// let options = {
//     width: 400,
//     height: 500,
//     };
//     let {width: w, height: h, color: c = 'black'} = options;
//     console.log(w + ', ' + h + ', ' + c );