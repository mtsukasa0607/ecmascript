'use strict';

let  ans = window.prompt('ヘルプを確認しますか？');
if(ans != null)
{
    window.alert('タップしてジャンプ、障害物を避ける');
    // document.getElementById('let_const').textContent = ans;
}
document.getElementById('let_const').textContent = ans;
console.log(ans);
