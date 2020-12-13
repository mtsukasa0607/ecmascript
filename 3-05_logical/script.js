'use strict';

const  hour = new Date().getHours();
// let hour = 15;

if (hour >= 19 && hour < 21) {
    window.alert('セール30%OFF');
} else if (hour === 9 || hour === 15) {
    window.alert('2BUY 1GET!')
} else {
    window.alert('またのご来店をお待ちしております。');

}
