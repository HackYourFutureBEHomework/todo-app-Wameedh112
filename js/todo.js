let TODOS = [];

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
      } 

// To remove the block of style if the array of items empty
      if (TODOS.length === 0) {
        document.querySelector('.main').style.display = 'none';
      } else {
        document.querySelector('.main').style.display = 'block';
        }
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
