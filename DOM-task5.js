//DOM traversing:- 
const itemList = document.querySelector("#items");

//1. parentNode
console.log(itemList.parentNode)
//2.parentElement
console.log(itemList.parentElement)
//3.childNode
//also includes white spaces and newline
console.log(itemList.childNodes);
//4.children
//only include tag(element) not white spaces
console.log(itemList.children);
//5.firstChild
//also includes white spaces and newline
console.log(itemList.firstChild);
//6.firstElementChild
//only include tag(element) not white spaces
console.log(itemList.firstElementChild);
//6.lastChild
//also includes white spaces and newline gives textNode
console.log(itemList.lastChild);
//6.lastElementChild
//only include tag(element) not white spaces
console.log(itemList.lastElementChild);
//7.nextslibing
//also includes white spaces and newline gives textNode
console.log(itemList.nextSibling);
//8.nextElementslibing
//only include tag(element) not white spaces
console.log(itemList.nextElementSibling);
//9.previousSlibing
//also includes white spaces and newline gives textNode
console.log(itemList.previousSibling);
//10.previousElementSlibing
console.log(itemList.previousElementSibling);

//11.createElement
const newDiv = document.createElement("Div");
//add class
newDiv.className = "hello"
//add id
newDiv.id = "newDiv"
//add Attributes
newDiv.setAttribute("title" , "Hello Div");
newDiv.textContent = "This is new Div"

const listGroup = document.querySelector(".list-group")

listGroup.append(newDiv);

console.log(newDiv)

//Task 1:- 
//Now go head and add HEllo word before Item Lister

const spanTag = document.createElement("Span");
spanTag.textContent = "Hello "
const header = document.querySelector("div.container h1 ");
header.prepend(spanTag);

//Task 2:-
//Now go head and add HEllo word before Item 1

const list = document.createElement("Li")
list.textContent = "Hello"
const listItems = document.querySelector(".list-group")
listItems.prepend(list);