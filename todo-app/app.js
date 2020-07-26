
var list = document.getElementById("list");


function addTodo(){
    
    
    var todo_item = document.getElementById("todo-item");
    
      //creating list     
    var li= document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
  

     //delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class" , "btn" );
    delBtn.setAttribute("onClick" ,"deleteItem(this)");


    //create edit button

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.appendChild(editText);
    editBtn.setAttribute("class","edit-btn")
    editBtn.setAttribute("onClick" ,"editItem(this)");


    delBtn.appendChild(delText);
    li.appendChild(delBtn);
    li.appendChild(editBtn);

     list.appendChild(li);
    todo_item.value = "";


}


function editItem(e){

var val = prompt("enter the edit value " , e.parentNode.childNodes[0].nodeValue );
e.parentNode.childNodes[0].nodeValue = val;

}


function Delete_All(){
    list.innerHTML = "";
}


function deleteItem(e){

    e.parentNode.remove();

}