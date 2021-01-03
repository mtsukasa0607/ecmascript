'use strict';

const lang = document.querySelector('html').lang;
console.log(lang);

// 初期セレクトif版
// if(lang === 'ja') {
//     document.querySelector('option[value="index.html"]').selected = true;
//     console.log(1);
// } else if(lang === 'en') {
//     document.querySelector('option[value="index-en.html"]').selected = true;
//     console.log(2);
// } else if(lang === 'zh') {
//     document.querySelector('option[value="index-zh.html"]').selected = true;
//     console.log(3);
// }
// console.log(lang);

// switch版
switch(lang) {
    case 'ja':
        document.querySelector('option[value="index.html"]').selected = true;
        break;
    case 'en':
        document.querySelector('option[value="index-en.html"]').selected = true;
        break;
    case 'zh':
        document.querySelector('option[value="index-zh.html"]').selected = true;
        break;
    default:
        document.querySelector('option[value="index.html"]').selected = true;
}

console.log(lang);

// ページ移動
document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}

