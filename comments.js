
    //event listner for input boxes enter key down
    document.getElementById("name").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            inputitem()
        }
    })
    document.getElementById("comment").addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            inputitem()
        }
    })

    function comment(name, comment) {
        this.name = name;
        this.comment = comment;
    }

    //function to add a new item
    function inputitem(){
        if (JSON.parse(sessionStorage.getItem("comments") == null)) {
            comments = []
        }
        else {
            comments = []
            comments = JSON.parse(sessionStorage.getItem("comments"))
        }
            let newcomment = new comment(
                document.getElementById("name").value,
                document.getElementById("comment").value,
            );
            comments.push(newcomment);
            sessionStorage.setItem("comments", JSON.stringify(comments));
            createlist()
            document.getElementById("name").value = null
            document.getElementById("comment").value = null
        }

    //function to delete an item
    function deleteitem(n){
        comments.splice(n, 1);
        sessionStorage.setItem("comments", JSON.stringify(comments));
        createlist()
    }

    //function to edit an item
    function edititem(n){

        comments = JSON.parse(sessionStorage.getItem("comments"));
        document.getElementById("tr"+n).innerHTML = "<td> <input type='text' id='editname'> </td><td> <input type='text' id='editcomment'> </td><td><img src='Images/save-xxl.png' alt='Delete Icon' height='20' id='0' onclick='saveedititem(" + n + ")' class='clickitem'></td><td><img src='Images/delete-xxl.png' alt='Delete Icon' height='20' id='0' onclick='deleteitem(" + n + ")' class='clickitem'></td>"
        document.getElementById("name").style.visibility = "hidden";
        document.getElementById("comment").style.visibility = "hidden";
        document.getElementById("savebutton").style.visibility = "hidden";
        document.getElementById("editname").value = comments[n].name
        document.getElementById("editcomment").value = comments[n].comment
    }

    //function to save teh newly edited items
    function saveedititem(n){
        comments[n].name = document.getElementById("editname").value
        comments[n].comment = document.getElementById("editcomment").value
        sessionStorage.setItem("comments", JSON.stringify(comments));
        createlist()
        document.getElementById("name").style.visibility = "visible";
        document.getElementById("comment").style.visibility = "visible";
        document.getElementById("savebutton").style.visibility = "visible";
    }

    //function on load of the page to check if there is any data in the sessionstorage
    function Load() {
        if (sessionStorage.getItem("hasCodeRunBefore") === null) {
            comments = [];
            sessionStorage.setItem("comments", JSON.stringify(comments));
            sessionStorage.setItem("hasCodeRunBefore", true);
        } else {
            createlist()
        }
    }


    //run array, for each item in the array add a list item in the ordered list
    function createlist(){
        if (JSON.parse(sessionStorage.getItem("comments") == null)) {
            comments = []
        }
        else {
            comments = []
            comments = JSON.parse(sessionStorage.getItem("comments"))
            comments = JSON.parse(sessionStorage.getItem("comments"));
            let table = document.getElementById("tabledata");
            table.innerHTML = ""
            for (i = 0; i < comments.length; i++) {
                let tr = table.insertRow();
                tr.id = "tr"+i
                tr.insertCell().textContent = comments[i].name
                tr.insertCell().textContent = comments[i].comment;
                tr.insertCell().innerHTML ="<img src='Images/edit-xxl.png' alt='Delete Icon' height='20' id='" + i + "' onclick='edititem(" + i + ")' class='clickitem'>"  
                tr.insertCell().innerHTML ="<img src='Images/delete-xxl.png' alt='Delete Icon' height='20' id='" + i + "' onclick='deleteitem(" + i + ")' class='clickitem'>"  
            }
        }


    }

































      
    