'use strict';


const num = Math.floor( Math.random() * 6);
const my_ans = parseInt(window.prompt('数あてゲーム。0 ~ 5の数字を入力してください。'));

let msg;
if(my_ans === num) {
    msg = 'あたり！';
} else if(my_ans < num) {
    msg = '残念、もっと大きい';
} else if(my_ans > num){
    msg = '残念、もっと小さい';
} else {
    msg = '0 ~ 5の数字を入力してください。';
}
window.alert(msg);
document.getElementById('let_const').textContent = msg;
console.log(num);
console.log(my_ans);
console.log(msg);