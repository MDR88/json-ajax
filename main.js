// I created a varible that will refer to the ID in my main div called aninmal-info.
const animalContainer = document.getElementById("animal-info");
// I created a variable that refers to the button id called btn.
const btn = document.getElementById("btn");
// I created an Event Listener so when my button is clicked it will run a function.
//The function is Getting the link to the API. 
btn.addEventListener("click", function() {

    //I created a variable that can request data from the web server with XMLHttpRequest.
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    // This is waits until the page loads then JSON.parse will convert the data from a string to an object.
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();

});
// This function adds HTML to the DOM.
function renderHTML(data) {

    let htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";

    }

    //This refers to my ID on my div in my index.html. Then writes to it, the beforeend is where it will write, followed by a comma and the text I want to write to the DOM.
    animalContainer.insertAdjacentHTML('beforeend', htmlString)

}