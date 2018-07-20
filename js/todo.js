let TODOS = [];
let Filtersno="";
function update() {
  const $todoList = document.querySelector(".todo-list");
  $todoList.innerHTML = "";
  for (const item of TODOS) {
    const $li = document.createElement("li");
    if (item.done) {
      $li.classList.add("completed");
    }
    $todoList.appendChild($li);

    // Toggle button
    const $toggle = document.createElement("input");
    $toggle.className = "toggle";
    $toggle.setAttribute("type", "checkbox");
    if (item.done) {
      $toggle.setAttribute("checked", "checked");
    }
    $toggle.addEventListener("change", onToggleTodo.bind(null, item.id));
    $li.appendChild($toggle);

    // Label
    const $label = document.createElement("label");
    $label.innerHTML = item.title;
    $li.appendChild($label);
    
    // Delete button
    const $button = document.createElement("button");
    $button.setAttribute("class","destroy");
    $li.appendChild($button);

// add event to X button
  $button.addEventListener ("click", onDeleteItem.bind(null, item.id));
    
  //The code of unfinished items
    const $unFinished = TODOS.filter(falseDone => !falseDone.done); 

    // console.log($unFinished) ;        
    const $Span = document.querySelector('.todo-count');       
      if ($unFinished.length === 1){   
        $Span .innerHTML = $unFinished.length + ' item left';
       }          
        else {
          $Span.innerHTML = $unFinished.length + ' items left';
        } 
      }//End For.************** 

      //4.1 In our update function, get the list of completed items (hint: use filter to filter on items that are done).
      // Count the number of items in that list. If it's bigger than zero, show the .clear-completed button, otherwise hide it.
        const $completed = TODOS.filter(trueDone => trueDone.done);
        
      if($completed.length > 0){
        const $ClearCompleted = document.querySelector('.clear-completed');
           $ClearCompleted.innerHTML= 'Clear completed';
        }else {
    const $ClearCompleted = document.querySelector('.clear-completed');
    $ClearCompleted.innerHTML= ' ';
      }

      // To remove the block of style if the array of items empty
      if (TODOS.length === 0) {
        document.querySelector('.main').style.display = 'none';
      } else {
        document.querySelector('.main').style.display = 'block';
        }   

//********//In update, create a filteredItems variable that contains either all items, only the active items or the completed items.

        filteredItems = TODOS;

    }//End Update************


//********//  Use the filter function for that (specifically, use it three times,
//******** // one in each branch of the if condition)
    
      function onChangeFilter(Filtersno){
        console.log(" Event is " + Filtersno);
        if (Filtersno ==="completed"){
          CompletedTodo = TODOS.filter(items => items.done );
                  console.log("completed filteredItems  " + CompletedTodo);
        } else if (Filtersno ==="active"){
            ActiveTodo = TODOS.filter( items =>!items.done);
          console.log("active filteredItems  " + ActiveTodo);
          document.querySelector(".main").style.display = "block";
        }
               else {
          filteredItems = TODOS;
          console.log("All filteredItems  " + filteredItems);
        }
       update();
        }   
       
  function onToggleTodo(id) {
    const todo = TODOS.find(todo => todo.id === id);
    // TODOS.find(function(todo) { return todo.id === id; });
    todo.done = !todo.done;
    update();
  }

// Delete function
  function onDeleteItem(id){
    TODOS = TODOS.filter($dItem => $dItem.id != id);
    update();
  }

//4.3 In that function, use filter on the entire list of TODOS to remove completed items. 
  function ClearCompleted () {
    TODOS = TODOS.filter($cItem => !$cItem.done);
    update();
  }

  function onNewTodo(e) {
    const title = e.target.value;
    console.log(title);
    TODOS.push({
      id: Date.now(),
      title,
      done: false
    });
    update();
    e.target.value = "";
  }

// Select the new todo input field.
  const $newTodo = document.querySelector(".new-todo");
  $newTodo.addEventListener("change", onNewTodo);

//4.2 Add an event listener add the very end of our file on the .clear-completed button that reacts to a click event.
// Make it call a function that you create.

  const $clearCompleted = document.querySelector(".clear-completed");
  $clearCompleted.addEventListener("click", ClearCompleted);

  //********//Add three event listeners for our three buttons. You can use bind to connect the three buttons to the same onChangeFilter button, 
//********//but you can also just make three filters. 
  const $allTodo = document.querySelector('.filters').childNodes;
  $allTodo[1].addEventListener("click",onChangeFilter.bind(null,"all"));
  $allTodo[3].addEventListener("click",onChangeFilter.bind(null,"active"));
  $allTodo[5].addEventListener("click",onChangeFilter.bind(null,"completed"));
  console.log ($allTodo[1]);
  console.log ($allTodo[3]);
  console.log ($allTodo[5]);

