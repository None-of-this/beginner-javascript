// const p = document.querySelector('p');
// console.log(p)
// const divs = document.querySelectorAll('.items img');
// // return all child img of all class .items
// console.log(divs)

// const okay = document.querySelectorAll('.items h2 strong');
// // strong child of h2 child of items
// // you could use querry selector on variable, like okay.querySelector('.some)$
// const a = document.querySelector('#one');
// console.log(a);

// const heading = document.querySelector('h2')

// console.log(heading.textContent);
// console.dir(heading.textContent);

// console.log(heading.innerText);
// //only reable text
// console.log(heading.innerHTML);
// // raw html
// console.log(heading.outerHTML);
// // include inner and outer tag balise

// // heading.textContent = "jojoj";
// let pizza = document.querySelector('.pizza');
// let i = 0;
// pizza.addEventListener('click', function() {
//     i++;
//     console.log(i);
//     pizza.textContent = `i ate ${i} pizza`;
//     pizza.insertAdjacentHTML('beforeend', `${'🍕'.repeat(i)}`);
// });

// CLASSES!

const imgWith = document.querySelector(".nice")
// imgWith.addEventListener('click', function() {
//     imgWith.classList.toggle('open')})
// console.log(imgWith.classList)
// // .classList.toggle(.class) .remove(.class) .add(.class) .contain(.class) (will true if it has it)
// imgWith.alt = 'something'; // setter
// imgWith.width = 200;
// window.addEventListener('load', function() {
    
// })

imgWith.setAttribute('name-attribute', 'the attribute itself');
console.log(imgWith.dataset)