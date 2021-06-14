console.log('Hello World');

var article = document.getElementById('home-page');
console.log(article);

// finds elements by tag
let section = document.querySelector('section');
console.log(section);

// finds elements by class name
var lead = document.querySelector('.lead');
console.log(lead);
lead.textContent;

article.children;
article.parentElement;
article.nextElementSibling;
article.firstElementChild;

// just in the memory right now, hasn't actually been created 
// in the DOM tree
var li = document.createElement('li');
// changing the CSS
li.classList.add('last');
li.style.backgroundColor = 'pink';

var a = document.createElement('a');
a.textContent = "Four";
a.style.color = "white";

// adds 'a' as a child to 'li'
// added to browser
li.appendChild('a');

var uls = document.getElementsByTagName('ul');
var ul = uls[0];
ul.appendChild(li);
