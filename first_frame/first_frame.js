
$("#yellowButton").on({
    click: function () {
        window.parent.$("#secondFrame").contents().find('body').css('backgroundColor', 'yellow');
    }
})

$("#greenButton").on({
    click: function () {
        window.parent.$("#secondFrame").contents().find('body').css('backgroundColor', 'green');
    }
})

$("#blueButton").on({
    click: function () {
        window.parent.$("#secondFrame").contents().find('body').css('backgroundColor', 'blue');
    }
})