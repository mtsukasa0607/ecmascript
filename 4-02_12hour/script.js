'use strict';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

let ampm = '';
if (hour < 12) {
    ampm = 'a.m.';
} else {
    ampm = 'p.m.';
}

const output = `${year}/${month + 1}/${date} ${hour}:${min}:${sec}`;
const output_ampm = `${year}/${month + 1}/${date} ${hour % 12}:${min}:${sec} ${ampm}`;
document.getElementById('time').textContent = output;
document.getElementById('time_ampm').textContent = output_ampm;
