console.log('ok')
const myPara = document.createElement('p');
myPara.textContent = 'fiat lux';
myPara.classList.add('special');

const myImage = document.createElement('img');
myImage.src  = "https://source.unsplash.com/random/50"
myImage.alt  = "nice pick"

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);
console.log(myPara);

myDiv.appendChild(myPara);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv); //it's better to add all at the dom in one time
// so this belongs at the end, it is requesting the browser to do things

const heading = document.createElement('h2');
heading.textContent = 'HEADING DUMBASS';
myDiv.insertAdjacentElement('afterbegin', heading)

const list = document.createElement('ul')
for(let i = 0; i < 5; i++) {
    const nums = ['one', 'two', 'three', 'four', 'five']
    const element = document.createElement('li');
    element.textContent = `${nums[i]}`;
    list.appendChild(element);
}

document.body.prepend(list)

// node.cloneNode() 
