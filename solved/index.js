// Open index.html in your code editor and take a moment to study the code.
// Then open the file in your web browser and notice how you are prompted for various pieces of information that correspond to the incomplete HTML being rendered to the page.
// Use the values collected by each prompt to update their corresponding element, e.g. the name collected from the prompt should update the element with an id of #name.
// The #name, #color, and #season elements should be updated with the innerText property.

// Prompt the user for some information
const name = prompt('What is your name?');
const color = prompt('What is your favorite color?');
const season = prompt('What is your favorite season?');
let interests = prompt('What are you interested in?\nSeperate interests with a comma.\ne.g. hiking, fishing golf, etc.');

// Split is a built-in method that turns a string into an array of smaller strings, splitting them by a specified seperator (', in this case')
interests = interests.split(',');

// 1. Get references to the #name, #color, #season, and #interests elements
let nameSPAN=document.querySelector('#name')
let colorSPAN=document.querySelector('#color')
let seasonSPAN=document.querySelector('#season')
let interestUL = document.querySelector('#interests');

// 2. Set the `innerText` of the #name, #color, and #season elements to their corresponding collected values
nameSPAN.innerText=name;
colorSPAN.innerText=color;
seasonSPAN.innerText=season;

// Creating a string to hold the HTML we'll insert into the list
let interestHTML = '';

// 3. Use a for-loop and the `innerText` property to create a string of li tags containing each collected intererst
for(let i = 0; i < interests.length; i++ ){
    const interest = interests[i];
   interestHTML +=  `<li>${interest}</li>`;
}


// Insert the string of interest li tags inside of the #interests element
interestUL.innerHTML= interestHTML;