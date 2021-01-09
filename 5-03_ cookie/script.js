'use strict';

document.getElementById('pi').textContent = Math.PI;
document.getElementById('floor').textContent = Math.floor(Math.PI);
document.getElementById('output').textContent = point(Math.PI, 2);

function point (num, digit) {
    const mover = 10 ** digit;
    return Math.floor(num * mover) / mover;
}

let agree = Cookies.get('cookie-agree');
let panel = document.getElementById('privacy-panel');
if(agree === 'yes') {
    console.log('クッキーを確認しました');
    document.body.removeChild(panel);
} else {
    console.log('クッキーを確認できません');
    document.getElementById('agreebtn').onclick = function() {
        Cookies.set('cookie-agree', 'yes', {path: '/'}, {expires: 7});
    };
}

// クッキー削除（テスト用）
document.getElementById('testbtn').onclick = function() {
    Cookies.remove('cookie-agree');
};