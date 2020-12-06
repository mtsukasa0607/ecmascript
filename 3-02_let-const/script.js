'use strict';

let  ans = window.prompt('ヘルプを確認しますか？');
if(ans != null)
{
    document.getElementById('let_const').textContent = ans;
}
console.log(ans);
