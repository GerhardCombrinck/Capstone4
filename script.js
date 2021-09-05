
function item(name, image) {
    this.name = name;
    this.image = image;
}


//function to save the specified item sfor later by adding them to an array which is stored in sessionstorage
function saveforlater(row){
    if (JSON.parse(sessionStorage.getItem("saved") == null)) {
        saveditems = []
    }
    else {
        saveditems = []
        saveditems = JSON.parse(sessionStorage.getItem("saved"))
    }
    field1 = document.getElementById(row).childNodes[1].textContent
    field2 = document.getElementById(row).childNodes[3].innerHTML
    let newitem = new item(
        field1,
        field2);
    saveditems.push(newitem)
    sessionStorage.setItem("saved", JSON.stringify(saveditems));
    alert("There are now " + saveditems.length + " items in your list")
}


//every time the page loads the 'saved items' tabel is created form the stored array
function CreateList() {
    saveditems = JSON.parse(sessionStorage.getItem("saved"));
    for (i = 0; i < saveditems.length; i++) {
        table = document.getElementById("savetable")
        tr = table.insertRow();
        tr.id = "tr" + i
        tr.insertCell().textContent = saveditems[i].name
        tr.insertCell().innerHTML = saveditems[i].image;
    }
}

//if an item is liked it is also stored in an array so that the like can be indicated to the user
function like(item){    
    if (JSON.parse(sessionStorage.getItem("liked") == null)) {
        liked = []
    }
    else {
        liked = []
        liked = JSON.parse(sessionStorage.getItem("liked"))
    }
    liked.push(item)
    sessionStorage.setItem("liked", JSON.stringify(liked));
    checkliked()
}


//this function runs to check if any of the items have been liked an then the text is changed to say 'you liked this item'
function checkliked(){
    if (JSON.parse(sessionStorage.getItem("liked") == null)) {
        liked = []
    }
    else {
        liked = []
        liked = JSON.parse(sessionStorage.getItem("liked"))
    }

    i = 0
    while (i < liked.length){
        document.getElementById(liked[i]).childNodes[7].textContent = "You liked this item"
        document.getElementById(liked[i]).childNodes[7].classList.add('a2')
        i = i + 1
    }
}


//this adds the functionality to the dropdown on the contact me page
$("#l1").click(function() {
    $("#Reason").val("Question")
});
$("#l2").click(function() {
    $("#Reason").val("Suggestion")
});
$("#l3").click(function() {
    $("#Reason").val("Complaint")
});


//this is an animation in a callback that rotates the top 3 images 1 at a time
//got the structure for the callbacks form "https://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate"
function rot1(angle){
    $({degrees: angle}).animate({degrees: angle + 360}, {duration: 2000, step: function(now) {$("#sp1").css({transform: 'rotate(' + now + 'deg)',function(){rot2(0)}})}});
}
function rot2(angle){
    $({degrees: angle}).animate({degrees: angle + 360}, {duration: 2000, step: function(now) {$("#sp2").css({transform: 'rotate(' + now + 'deg)',function(){rot3(0)}})}});
}
function rot3(angle){
    $({degrees: angle}).animate({degrees: angle + 360}, {duration: 2000, step: function(now) {$("#sp3").css({transform: 'rotate(' + now + 'deg)'})}});
}


//call the above rotate functions when teh page loads
$(document).ready(function(){
    rot1(0, function() {
    })
})