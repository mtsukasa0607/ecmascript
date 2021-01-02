'use strict';

let todo = ['デザインカンプ作成','データ整理', '勉強申し込み', '牛乳を買う'];
todo.push('歯医者に行く');
for (let item of todo) {
    const li = `<li>${item}</li>`;
    console.log(li);
    document.getElementById('list').insertAdjacentHTML('beforeend', li);
}
