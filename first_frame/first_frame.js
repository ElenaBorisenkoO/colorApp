$(document).ready(function () {

    $('button').click(function (event) {
        const color = event.target.dataset.color;
        window.parent.frames[1].postMessage(color, '*');
    });
});


window.addEventListener("message", function (event) {

    window.parent.frames[0].document.body.style.background = event.data;

}, false);