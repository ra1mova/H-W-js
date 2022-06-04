//задача2

let items = ['Hi','=', 'Roza'];
let result = items.map(function(elem){
return elem = elem + '!';
});
console.log(result);

//задача3

let a = ['Hi',',', 'Roza'];
let result1 = a.map(function(elem){
return elem = elem.split('').reverse().join('');
});
console.log(result1);

//задача4

let b = ['123', '456', '789'];
let res = b.map(function(nums){
nums = nums.split('');
let res = nums.map(function(subElem){
return subElem = Number(subElem);
})
return res;
})
console.log(res);

//forEach  задача 1

let f = [2, 5, 12, 3];
let sum = 0;
f.forEach(function(a){
sum += a * a;
})
console.log(sum);

//filter задача 1

let positive = [1, 3, 5, 7, 9, -2, -4, -6, -8, -10];
console.log(positive.filter(i => i >= 0));

//задача2

let negative = [1, 3, 5, 7, 9, -2, -4, -6, -8, -10];
console.log(negative.filter(i => i <= 0));

//задача3

let c = [1, 3, 5, 7, 15, -2, -4, -6, -8, -10];
console.log(c.filter(i => i >= 0 && i <= 10));

//задача4

let s = ['1','22','333','4444','55555','666666','7777777','88888888','999999999'];
console.log(s.filter(i => i.length >= 5));

//задача7

let m = [-4, 27, 19, -3, 15,-41, 2,-16,-13,-8];
console.log(m.filter(i => i < 0).length);