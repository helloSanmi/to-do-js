   //custom event
    //const event = new Event('onTodoDatabaseChange');    
    
    var todoInput = document.getElementById('todoInput');
    var todoButton = document.getElementById('todoBtn');
    var listContainer = document.getElementById('todoList');
    var output = document.getElementById('output');
    var todoDatabase = [];

    // document.addEventListener('onTodoDatabaseChange', function(e){
    //     display();
    // }, false);

    function display(){
        listContainer.innerHTML = "";
        todoDatabase.forEach(function(val, index){
          var content =
          '<li class="list-group-item list-group-item-action text-start" aria-current="true">' +
          "<span style='text-transform: capitalize;'>" +val+ '</span>  <a href="#" onclick="removeElement(event)" id="' 
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
      var value = val.toLowerCase();
      if (!todoDatabase.includes(value)) {
        var mess = todoDatabase.push(value);
      }
      else{
        var mess = output.innerHTML += '<strong>Oops! Todo already added</strong>'
        // output.innerHTML = ""
      }
      return mess;
    }

    todoInput.addEventListener('keypress', function(event){
        var value = event.target.value;
        if(value.length > 0 && event.which === 13){
            checkDuplicate(value)
            display();
            event.preventDefault();
        }
        
    });

    todoButton.addEventListener('click', function(){
        var value = todoInput.value;
        if(value.length > 0){
          checkDuplicate(value)
            display();
        }
    });
