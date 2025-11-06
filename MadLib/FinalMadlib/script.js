(function(){
    "use strict";
    console.log("reading js");

    // Make sure the form exists
    const form = document.querySelector('form');
    if (!form) {
        console.error('Form not found!');
        return;
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();

        // Get the input elements
        const adjectiveInput = document.querySelector('#adjective').value;
        const nounInput = document.querySelector('#noun').value;
        const foodInput = document.querySelector('#food').value;
        const placeInput = document.querySelector('#place').value;
        const scentInput = document.querySelector('#scent').value;

        // Get the values from the input fields
     

        // Get the output container element
        const storyOutput = document.getElementById("storyOutput");

    
        if (adjective && noun && food && place && scent) {
           
            
            const story = `It was a ${adjectiveInput} morning when I woke up to the sound of ${nounInput} outside my window.
            After a delicious breakfast of ${foodInput}, I decided to spend the day at the ${placeInput}.
            The sun was shining, the air smelled like ${scentInput}, and everything felt just right.
            By the time the day ended, I couldn’t stop smiling — it truly was the perfect day.`;
            
            storyOutput.innerHTML = `<p>${story}</p>`;
            showpage2();
            hidepage1();
        } else {
            storyOutput.innerHTML 
        }
    });

    function showpage2() {
        const page2 = document.getElementById("page2");
        if (page2) {
            page2.classList.remove("hidden");
        }
       
    }

    function hidepage1() {
        const page1 = document.getElementById("page1");
        if (page1) {
            page1.classList.add("hidden");
        }
    }

}());