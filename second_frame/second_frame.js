const firstFrame = window.parent.document.getElementById("firstFrame");

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', (event) => {
        firstFrame.contentWindow.document.body.style.background = event.target.className;

    });
});