// let user = {
//     name:'Roza',
//     surname:'Raimova'
// }
// user. name = 'Alan'
// delete user.name
// console.log(user);



let sum = 5
let user = {
    name:'Roza',
    email:'rraimova02@gmail.com',
    age:30,
    password:12345678
}
let email = prompt('write your  username')

if (email == user.email) {
}else{
    alert('Email is not defined')
}
let password = prompt('write your  username')
if (password == user.password) {
     total = +prompt('2+3=? туура эсептесен, премия аласын?')
}else{
    alert('password is incorrect')
}if (sum == total) {
    user.sum = 5
    alert(`Туура!сенин премиян  ${user.sum}`)
}else{
    alert('Туура эмес жооп бердин!')
}

console.log(user);