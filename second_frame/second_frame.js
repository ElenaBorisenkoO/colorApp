window.addEventListener("message", function (event) {

    window.parent.frames[1].document.body.style.background = event.data;

}, false);

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const color = event.target.dataset.color;
        window.parent.frames[0].postMessage(color, '*');

    });
});

