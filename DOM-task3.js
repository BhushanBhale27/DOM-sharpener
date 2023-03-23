// const listItems = document.getElementsByClassName("list-group-item")
// console.log(listItems);

//WE CAN NOT EDIT NEW li BECAUSE IT HAS DIFFERENT CLASS NAME

const listItems = document.getElementsByTagName("li")
console.log(listItems[4]);

listItems[4].style.color = "Red"
listItems[4].style.backgroundColor = "grey"
listItems[4].style.border = "3px solid black"

