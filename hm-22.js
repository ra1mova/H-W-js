// 1 задача

let massive = [1, 2, 3, 4, 5]
console.log(massive)
massive.pop()
console.log(massive)
massive.unshift(0)
console.log(massive)

// 2 задача

let nums = [1, 4, 6, 8, 4, 10]
res = 0;
for(i=0; i<nums.length; i++){
    res+=nums[i]
}
console.log(res)

// 3 задача

let students = [
    {
        name: "Alan",
        age: 30
    },
    {
        name: "John",
        age: 25
    },
    {
        name: "Nurs",
        age: 18
    }
]

let result = students.filter((el)=>el.name=="John")
console.log(result)

// 4 задача

let numbers = [1, 2, 3, 4, 5]
delete numbers[1]
delete numbers[2]
console.log(numbers)

// 5 задача

let arr = [1, 2, 5, 9, 1, 4, 2, 5]
let set = new Set(arr)
console.log(set)

// 6 задача

let newMassive = ["Ala-Too", "Peaksoft", "Python", "JavaScript", "html"]
console.log(newMassive.indexOf("Peaksoft"));
console.log(newMassive.indexOf("html"));
console.log(newMassive.length)

// 7 задача

let array = [10, 20, 10, 40, 50, 60, 70]
for(i=0; i<array.length; i++){
    if(array[i]+array[i+1]==50){
        console.log(i, i+1)
    }
}