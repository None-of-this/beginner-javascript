// Make a div
const myDiv = document.createElement("div");
// add a class of wrapper to it
myDiv.classList.add('wrapper')
// put it into the body
document.body.appendChild(myDiv)
// make an unordered list
const myUnorderedList = document.createElement('ul')
// add three list items with the words "one, two, three" in them
const number = ['one', 'two', 'three', 'four', 'five']
for ( let i = 0; i < 3; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = `${number[i]}`;
    myUnorderedList.appendChild(listItem);
}
// put that list into the above wrapper
myDiv.append(myUnorderedList)
// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src  = "https://coresites-cdn-adm.imgix.net/mpora_new/wp-content/uploads/2015/01/shutterstock_112835920.jpg"
// set the width to 250
myImage.width = 800
// add a class of cute
myImage.className = 'cute'
// add an alt of Cute Puppy
myImage.alt  = "Cute Puppy"
// Append that image to the wrapper
myDiv.append(myImage)

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div>
<p>first</p>
<p>second</p>
</div>
`
const myFragment = document.createRange().createContextualFragment(myHTML);
// put this div before the unordered list from above
myDiv.prepend(myFragment)

// add a class to the second paragraph called warning
myDiv.firstElementChild.lastElementChild.className = 'warning'
// remove the first paragraph
myDiv.firstElementChild.firstElementChild.remove()

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
const dogYears = (name, age, height) => {
    const ageInDogYears = age * 7;
return `<div class="playerCard">
  <h2>${name} - ${age}</h2>
  <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
</div>`;
}

console.log(dogYears('non', 23, 183));
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const colorCard = ['spade', 'clubs', 'heart', 'diamon']
const generatePlayerCard = () => {
    const cardCol = colorCard(Math.floor(Math.random()*4));
    const cardNum = Math.floor(Math.random()*13);
    return `The ${cardcol} of ${cardNum}`
}

// make a new div with a class of cards
document.createElement('div');
// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
