
    var todoInput = document.getElementById('todoInput');
    var todoButton = document.getElementById('todoBtn');
    var listContainer = document.getElementById('todoList');
    var output = document.getElementById('output');
    var todoDatabase = [];

    function display(){
        listContainer.innerHTML = "";
        todoDatabase.forEach(function(val, index){
          var content =
          '<li class="list-group-item list-group-item-action text-start" aria-current="true">' +
          "<span>" +val+ '</span>  <a href="#" onclick="removeElement(event)" id="' 
          +index+ '" class="text-end">Delete</a></li>';
				listContainer.innerHTML += content;
        });
        todoInput.value = "";
    }

    function removeElement(event){
        var id = event.target.getAttribute('id');
        //remove array content
        todoDatabase.splice(id, 1);
        event.target.parentNode.remove();
    }

    function checkDuplicate(val){
      output.innerHTML = ""
      if (todoDatabase.includes(val) === false) {
        var message = todoDatabase.push(val);
      }
      else{
        var message = output.innerHTML += '<strong>Oops! Todo already added</strong>'
      }
      return message;
    }

    todoInput.addEventListener('keypress', function(event){
        var value = event.target.value;
        if(value.length > 0 && event.which === 13){
            checkDuplicate(value)
            display();
        }
    });

    todoButton.addEventListener('click', function(){
        var value = todoInput.value;
        if(value.length > 0){
          checkDuplicate(value)
            display();
        }
    })
