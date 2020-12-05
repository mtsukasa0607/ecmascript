'use strict';

document.getElementById('choice').textContent = new Date();
if(window.confirm('ゲームスタート！準備はOK?'))
{
    document.getElementById('pr_if').textContent = 'ゲーム開始';
    console.log('ゲーム開始');
} else {
    document.getElementById('pr_if').textContent = 'ゲーム終了';
    console.log('ゲーム終了');
}
