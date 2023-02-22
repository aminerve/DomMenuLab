// 3.0
// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
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
