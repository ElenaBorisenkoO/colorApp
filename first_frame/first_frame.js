const secondFrame = window.parent.$("#secondFrame").contents().find('body');

$('button').click(function(event) {
    secondFrame.css('backgroundColor', event.target.className)
});