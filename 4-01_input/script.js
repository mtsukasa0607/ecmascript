'use strict';

document.getElementById('form').onsubmit = function(event) {
    // console.log('クリックされました。。。');
    // event.preventDefault();
    event.preventDefault();
    let search = document.getElementById('form').word.value;
    document.getElementById('output').textContent = `「${search}」の検索中。。。`
};
