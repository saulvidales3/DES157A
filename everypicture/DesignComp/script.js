(function(){
    "use strict";
    console.log("reading JS");


   document.querySelectorAll('.card1, .card2').forEach(function(card){
     card.addEventListener('click', function(e){
       e.preventDefault();
       card.classList.toggle('flipped');
     });
   });



}());