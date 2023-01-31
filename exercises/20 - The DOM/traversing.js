const wes = document.querySelector('.wes');
// console.log(wes.children);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSiblin);
// console.log(wes.nextElementSiblin);
// console.log(wes.parentElement);

const ok = document.querySelector(".item .wrapper p");
console.log(ok)
ok.remove()

const p = document.createElement("p");
p.textContent = 'I will be creative at some point'
document.body.appendChild(p)
// p.remove()
console.log(p)