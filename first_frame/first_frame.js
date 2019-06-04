 $(document).ready(function() {

     const secondFrame = window.parent.$("#secondFrame").contents().find('body');

     $('button').click(function(event) {
         secondFrame.css('background-color', event.target.className)
     });
 });