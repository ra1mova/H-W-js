// №1 ---
// console.log(document.getElementById("age-table"));

// №2 ---
// console.log(document.getElementById("age-list").children);

// №3 ---
// console.log(document.querySelector("td").textContent);

// №4 ---
// console.log(document.body.firstElementChild);

// №5 ---
// const firstInput = document.body.firstElementChild.firstElementChild.firstElementChild
// console.log(firstInput);

// №6 ---
// const lastInput = document.body.firstElementChild.lastElementChild
// console.log(lastInput);

// конспект
//nodeType - Свойство nodeType позволяет узнать тип DOM-узла. Его значение – числовое: 1 для элементов,3 для текстовых узлов, и т.д. Только для чтения.

// nodeName/tagName
// Для элементов это свойство возвращает название тега (записывается в верхнем регистре, за исключением XML-режима).
//  Для узлов-неэлементов nodeName описывает, что это за узел. Только для чтения.

//innerHTML - Внутреннее HTML-содержимое узла-элемента. Можно изменять.

//outerHTML - Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem. Вместо этого она заменяет его во внешнем контексте.

//nodeValue - Содержимое узла-неэлемента (текст, комментарий). 
//Эти свойства практически одинаковые, обычно мы используем data. Можно изменять.
// data - Свойство данных задает или возвращает значение атрибута данных элемента <object>.
// Атрибут данных указывает URL-адрес ресурса, который будет использоваться объектом.

//textContent -Текст внутри элемента: HTML за вычетом всех <тегов>. Запись в него помещает текст в элемент, при этом все специальные символы и теги интерпретируются как текст. 
//Можно использовать для защиты от вставки произвольного HTML кода.

//hiddden - Когда значение установлено в true, делает то же самое, что и CSS display:none.


// №7 ---
// const elementDiv = document.body.firstElementChild
// console.log(elementDiv);

// №8 ---
// const elementUl = document.body.firstElementChild.nextElementSibling
// console.log(elementUl);

// // №9 ---
// let div = document.body.firstElementChild.nextElementSibling.lastElementChild.textContent
// console.log(div);