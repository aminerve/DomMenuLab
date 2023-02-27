// 3.0
// Menu data structure
const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
// 1.0
const mainEl = document.querySelector("main");
console.log(mainEl);

// 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
console.log(mainEl);

//1.3

mainEl.classList.add("flex-ctr");

//2.0

const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

// 2.1
topMenuEl.style.height = "100%";
// 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
console.log(topMenuEl);
// 2.3
topMenuEl.classList.add("flex-around");

//3.1
menuLinks.forEach((obj) => {
  const a = document.createElement("a");

  a.setAttribute("href", obj.href);

a.textContent = obj.text

//append() allows you to append multiple nodes, or even text
topMenuEl.append(a)
// appendChild() allows you to append one set of nodes
  console.log(a);
});
// 4.0 ==================================================
const subMenuEl = document.getElementById('sub-menu')

// 4.1
subMenuEl.style.height = '100%'

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4.3
subMenuEl.classList.add('flex-around')

// 4.4
subMenuEl.style.position = 'absolute'

// 4.5
subMenuEl.style.top = '0'

// 5.0
// 5.1
const topMenuLinks = topMenuEl.getElementsByTagName("a");
let showingSubMenu = false;

// 5.2
topMenuEl.addEventListener('click', function(event){
event.preventDefault();
console.log(event.target.tagName);


if(event.target.toLowerCase() !=='a'){
  console.log('no a');
  return
}
})
// 5.3
event.target.classList.add('active');
if (event.target.classList.contains('active')){

  console.log(event.target);
  event.target.classList.remove('active');

  showingSubMenu=false
  
  subMenuEl.style.top='0';
  return
}