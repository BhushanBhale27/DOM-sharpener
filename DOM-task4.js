// Make the 2nd item have green background color
// Make the 3rd item invisible

const listItems = document.getElementsByClassName("list-group-item");
listItems[1].style.backgroundColor = "green"
listItems[2].style.display = "None"

// Using QuerySelectorALL change the font color to green for 2nd item in the item list
// Choose all the odd elements and make their background green using QuerySelectorALL

const listItems = document.querySelectorAll(".list-group-item")
listItems[1].style.color = "green";


for(let i=0;i<listItems.length;i++){
    if(i%2!==0)
    listItems[i].style.backgroundColor = 'green'

}

