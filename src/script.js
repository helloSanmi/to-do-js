//custom event
    const event = new Event('onTodoDatabaseChange');

    var todoInput = document.getElementById("todoInput");
    var todoButton = document.getElementById("todoBtn");
    var listContainer = document.getElementById("todoList");
    var todoDatabase = [];

    document.addEventListener("onTodoDatabaseChange", function (e) {
        display();
      }, false);

    function display() {
      listContainer.innerHTML = "";
      todoDatabase.forEach(function (val, index) {
        var content =
          '<li class="list-group-item list-group-item-action text-start" aria-current="true">' +
          "<span>" +
          val +
          '</span>  <a href="#" onclick="removeElement(event)" id="' +
          index +
          '" class="text-end">Delete</a>' +
          "</li>";
				listContainer.innerHTML += content;
			});
			todoInput.value = "";
      console.log(todoDatabase);
    }

    function removeElement(event) {
      var id = event.target.getAttribute("id");
      //remove array content
      todoDatabase.splice(id, 1);
      event.target.parentNode.remove();
    }

    todoInput.addEventListener("keypress", function (event) {
      var value = event.target.value;
      if (value.length > 0 && event.which === 13) {
        if (todoDatabase.includes(value) === false) {
          todoDatabase.push(value);
        }
        else{
          alert('Value already added to the List')
        }
        // todoInput.dispatchEvent(event);
        display();
      }
      
		});
		
    todoButton.addEventListener("click", function () {
      var value = todoInput.value;
      if (value.length > 0) {
        if (todoDatabase.includes(value) === false) {
          todoDatabase.push(value);
        }
        else{
          alert('Value already added to the List')
        }
        // todoButton.dispatchEvent(event);;
        display();
      }
    });
    
      
   