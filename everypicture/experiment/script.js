(function(){
    "use strict";
    console.log("reading JS");

   // Use vanilla JS instead of jQuery so this works without loading jQuery
   document.querySelectorAll('.card1').forEach(function(card){
     card.addEventListener('click', function(e){
       e.preventDefault();
       card.classList.toggle('flipped');
     });
   });

}());
