const item = document.querySelector('.item');

const i = 10

const myHTML = `
 <div class="okay">
     <h1>hey how are you ${i}</h1>
 </div>`

// console.log(item.innerHTML);

// const 

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment);
document.body.append(myFragment)
console.log(myFragment.querySelector('h1'));