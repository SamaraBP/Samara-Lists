
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
    var x = document.getElementById(anyListDiv);
    let length = x.children.length - 1;
    console.log("list is this long: " + length);
   
    // Get the new item from text field...
    var newItemObject = document.getElementById(anyInputField);
    var newItem = newItemObject.value;
    var capNewItem = newItem.charAt(0).toUpperCase() + newItem.slice(1);
    newItemObject.value = "";

    // Create the list elements...
    var listRow = document.createElement("div");
    var newListElement = document.createElement("div");
    var newListButton = document.createElement("div");

    // need to itterate each list element, give each a unique id.
    listRow.classList.add(anyListRow + length); //gives new number to each.
    listRow.classList.add("removeThing" + length);

    newListElement.classList.add("item");

    newListButton.classList.add("clearButton");
    newListButton.setAttribute("id", "removeThing" + length) //add as id?

    newListElement.innerHTML = capNewItem; //adds item to list item.
    newListButton.innerHTML = "🌸";


    // Inject list elements...
    var todoContainer = document.getElementById(anyListDiv);
    
    listRow.appendChild(newListElement);
    listRow.appendChild(newListButton);
    todoContainer.appendChild(listRow);
}


// function to REMOVE a list item when flower is pressed.
function removeItem() {
    console.log("entered outer clear function");

    $(".clearButton").click(function(event) {

        console.log(event);
        console.log('entered clear function');
        
        var delTarget = $(this).attr("id");
        console.log(delTarget);
    });
}