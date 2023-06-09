import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, onValue, push, set, remove} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyDaDQLF-_p6rx584PAaUCPUOCBogJSo20c",
    authDomain: "todo-app-43dcc.firebaseapp.com",
    databaseURL: "https://todo-app-43dcc-default-rtdb.firebaseio.com",
    projectId: "todo-app-43dcc",
    storageBucket: "todo-app-43dcc.appspot.com",
    messagingSenderId: "127690692236",
    appId: "1:127690692236:web:d2254e2dc2c1a923c8cda9"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();


onValue(ref(db, `todos`), (data) => {
    for(var key in data.val()){
      console.log(data.val()[key].Todo)
    // }
    
    
      var div = document.createElement('div');
        list.appendChild(div);
        div.setAttribute("class","end")


        var li = document.createElement('li');
        var liText = document.createTextNode(data.val()[key].Todo);
        li.appendChild(liText);
        div.appendChild(li);
        // console.log(list); 
        // todo_item.value = "";


     // Create Div   
        // var div = document.createElement('div');
        // list.appendChild(div);
        // div.setAttribute("class","end")


    // Edit Button
        var editBtn = document.createElement('button');
        var editText = document.createTextNode("EDIT");
        editBtn.appendChild(editText);
        div.appendChild(editBtn);
        editBtn.setAttribute("class","btn");
        editBtn.setAttribute("onclick","editItem(this)");

    // Delete Button
        var delBtn = document.createElement('button');
        var delText = document.createTextNode("DELETE");
        delBtn.appendChild(delText);
        div.appendChild(delBtn);
        delBtn.setAttribute("class","btn");
        delBtn.setAttribute("id","delItem");
        // delBtn.setAttribute("onclick","deleteItem(this)");

        // var box = document.getElementsByClassName("box")
        // box.classList.remove(box)
    }
 
  });



var list = document.getElementById("list");
let addTodo = document.getElementById("addTodo");
var todo_item = document.getElementById("todo-items");

addTodo.addEventListener("click", function() {
        var todo_item = document.getElementById("todo-items");
       push(ref(db, `todos`), {
         Todo: todo_item.value,
        //  key: keyValue   
       })

    todo_item.value = "";
})


delAll.addEventListener("click",function() {
    list.innerHTML = "";
    remove(ref(db, `todos`))
})


function editItem(e) {
    var val = prompt("Enter Updated value", e.parentNode.firstChild.innerHTML);
    e.parentNode.firstChild.innerHTML = val;
    // console.log(e.parentNode.firstChild.innerHTML)
}
delItem.addEventListener("click",function()
{
    // var deleteItem = document.getElementById("deleteItem")
    // e.parentNode.parentNode.remove();
    alert("ggg")
     console.log(key)
})

