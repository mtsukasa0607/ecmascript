'use strict';

const thumbs = document.querySelectorAll('.thumb');
console.log(thumbs);
thumbs.forEach(function(item, index) {
    item.onclick = function() {
        console.log(index + ' ' + this.dataset.image);
        document.getElementById('bigimg').src = this.dataset.image;
    }
});

const images = ['images/image1.jpg', 'images/image2.jpg', 
'images/image3.jpg', 'images/image4.jpg', 'images/image5.jpg'];

// 画像プリロード
images.forEach(function(item, index) {
    preloadImage(item);
});

let current = 0;
console.log(images.length);

function changeImage(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main_image').src = images[current];
        console.log(current);
        pageNum();
    }
};

function pageNum() {
    document.getElementById('page').textContent = `${current + 1} / ${images.length}`
}

function preloadImage(path) {
    let imgTag = document.createElement('img');
    imgTag.src = path;
    // console.log(imgTag);
    // console.log(imgTag.src);
}

document.getElementById('prev').onclick = function() {
    changeImage(-1);
    console.log(current);
};
document.getElementById('next').onclick = function() {
    changeImage(1);
    console.log(current);
};
