const form = document.getElementById("addForms")
const itemList = document.getElementById("items")

itemList.addEventListener("click" , removeBtn);
//form Submit Event:- 

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    

    //get input value
    const newItem = document.getElementById("item").value;

    //create new li element
    const li = document.createElement("Li");
    

    //add class
    li.className = "list-group-item"
    
    
    //add textNone with input value

    li.textContent = newItem;
    
    


    // itemList.append(edit);
    itemList.append(li);

    //create delete button element:-
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement("button");

    //add classes to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    editBtn.className = "btn btn-primary btn-sm float-right edit"

    //append text Node
    deleteBtn.textContent = "X";
    editBtn.textContent = "Edit";

    //Append text node
    li.append(deleteBtn);
    li.append(editBtn);

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













