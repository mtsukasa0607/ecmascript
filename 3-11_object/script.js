'use strict';

let jsbook = {title: 'Javascript', price: 2500, stock: 3};

console.log(jsbook);
console.log(jsbook.title);
console.log(jsbook.price);
console.log(jsbook.stock);
console.log(jsbook['price']);
jsbook.stock = 777;
console.log(jsbook.stock);
console.log(jsbook);

let obj = {
    addTax: function(num) {
        let tax = 0.1;
        return num * (1 + tax);
    }
}
console.log(obj);
console.log(obj.addTax(200));

for (let i in jsbook) {
    console.log(i + '=' + jsbook[i]);
}

document.getElementById('title').textContent = jsbook.title;
document.getElementById('price').textContent = jsbook.price + '円';
document.getElementById('stock').textContent = jsbook.stock;
