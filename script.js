'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const square = document.getElementById('square');
    const text = document.getElementById('text');
    const eBtn = document.getElementById('e_btn');
    const range = document.getElementById('range');
    const circle = document.getElementById('circle');

    btn.addEventListener('click', function () {
        square.style.backgroundColor = text.value;
    });

    range.addEventListener('input', function (e) {
        circle.style.cssText = `width: ${e.target.value}%; height: ${e.target.value}%;`;
    });

    eBtn.style.display = 'none';

});