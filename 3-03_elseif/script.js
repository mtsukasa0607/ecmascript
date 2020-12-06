'use strict';

let  ans = window.prompt('ヘルプを確認しますか？');

if(ans === 'yes') {
    window.alert('タップしてジャンプ、障害物を避ける');
} else if(ans === 'no') {
    window.alert('ゲーム起動中...');
} else {
    window.alert('yesかnoでお答えください。');
    ans = '小文字指定'
    document.getElementById('let_const').textContent = ans;
}

console.log(ans);
