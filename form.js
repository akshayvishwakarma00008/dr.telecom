function validation() {
    //  alert("working");
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;
    var contact = document.getElementById("contact").value;
    var addr = document.getElementById("tarea").value;
    var err = document.getElementById("error_msg");

    //alert(name);
    //alert(city);
   
    if (name.length < 3) {
        var text = "*please enter the valid name";   
        err.innerHTML = text;
        return false;

    }

    if (city.length < 3) {
        var text = "*please enter the valid city";   
        err.innerHTML = text;
        return false;

    }

    /*here Nan is a function for not a number*/

    if (isNaN(contact) || contact.length != 10) {
        var text = "*please enter a valid number";   
        err.innerHTML = text;
        return false;

    }

    if (addr.length < 15) {
        var text = "*please enter the valid address";   
        err.innerHTML = text;
        return false;

    }

    alert("form submitted sucessfully!");
    return true;
}