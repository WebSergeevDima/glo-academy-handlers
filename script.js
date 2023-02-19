'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const square = document.getElementById('square');
    const text = document.getElementById('text');
    const eBtn = document.getElementById('e_btn');
    const range = document.getElementById('range');
    const rangeText = document.getElementById('range-span');
    const circle = document.getElementById('circle');

    function setValueOfCircle() {
        rangeText.innerHTML = range.value + '%';
        circle.style.cssText = `width: ${range.value}%; height: ${range.value}%;`;
    }

    setValueOfCircle();
    eBtn.style.display = 'none';

    btn.addEventListener('click', function () {
        square.style.backgroundColor = text.value;
    });

    range.addEventListener('input', setValueOfCircle);

});