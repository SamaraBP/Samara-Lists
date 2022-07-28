// const express = require("express");
// const app = express();

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended: true}));



// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });


// // function to take ADD items in the form to the current list.
//     // need to get string from form, then create new item/button element with 
//     // text = to form string.

// app.post("/", function(req, res){
//     var addedItem = req.body.addItem;
//     console.log(addedItem);
// });


// app.listen(3000, function(){
//     console.log("Server up on 3000.")
// });







toggleList();
removeItem();


// function to take click on nav button, and toggle which list divs are visable..
function toggleList() {

    $(".todoButton").click(function(){

        $('.todoList').removeClass("invisible");
        $('.weatherDiv').addClass("invisible");
        $('.shoppingList').addClass("invisible");
    });

    $(".homeButton").click(function(){

        $('.todoList').addClass("invisible");
        $('.weatherDiv').removeClass("invisible");
        $('.shoppingList').addClass("invisible");
    });

    $(".shoppingButton").click(function(){

        $('.todoList').addClass("invisible");
        $('.weatherDiv').addClass("invisible");
        $('.shoppingList').removeClass("invisible");
    });
}


function addItem(clickedId) {

    var anyListDiv;
    var anyInputField;
    var anyListRow;

    // check if click came from todo or shopping
    if (clickedId == "todoAddButton") {
      
        anyListDiv = "todoList";
        anyInputField = "todoItemField";
        anyListRow = "todoListRow";

    } else if (clickedId == "shoppingAddButton") {
           
        anyListDiv = "shoppingList";
        anyInputField = "shoppingItemField";
        anyListRow = "shoppingListRow";
        
    }

    // Get length of list to assign numbered ID/class.
    var x = document.getElementById("todoList");
    let length = x.children.length;
    console.log("list is this long: " + length);
   
    // Get the new item from text field...
    var newItemObject = document.getElementById("todoItemField");
    var newItem = newItemObject.value;


    // Create the list elements...
    var listRow = document.createElement("div");
    var newListElement = document.createElement("div");
    var newListButton = document.createElement("div");

    // need to itterate each list element, give each a unique id.
    listRow.classList.add("todoListRow" + length); //gives new number to each.
    newListElement.classList.add("item");
    newListButton.classList.add("clearButton");

    newListElement.innerHTML = newItem; //adds item to list item.
    newListButton.innerHTML = "🌸";


    // Inject list elements...
    var todoContainer = document.getElementById("todoList");
    
    listRow.appendChild(newListElement);
    listRow.appendChild(newListButton);
    todoContainer.appendChild(listRow);
}


// function to REMOVE a list item when flower is pressed.
function removeItem() {

    $("clearButton").click(function(){

    });
}