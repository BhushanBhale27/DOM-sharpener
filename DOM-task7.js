const form = document.getElementById("addForms")
const itemList = document.getElementById("items")


itemList.addEventListener("click" , removeBtn);
//form Submit Event:- 

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    

    //get input value
    const newItem = document.getElementById("item").value;
    const discription = document.getElementById("discription").value;

    //create new li element
    const li = document.createElement("Li");

    //add class
    li.className = "list-group-item"
    
    //add textNone with input value

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(discription));

    itemList.append(li);

    //create delete button element:-
    const deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //append text Node
    deleteBtn.textContent = "X";

    //Append text node
    li.append(deleteBtn);

    //Append li to list
    itemList.append(li);

    //Add edit button next to delete button..

})


//Delete button functionality:- 
function removeBtn(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure???')){
            var li = e.target.parentElement;
            itemList.removeChild(li);        
        }
    }
}




const filter = document.getElementById('filter')

filter.addEventListener("keyup" , filterItems);

function filterItems(e){
    //convert text to lowercase
    const text = e.target.value.toLowerCase();
    //GET lis
    const items = itemList.getElementsByTagName('li');
    //convert array
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent;
        const discription = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || discription.toLowerCase().indexOf(text) != -1 ){
            item.style.display = "block";
        }
        else {
            item.style.display = 'none';
        }
    });
 
}