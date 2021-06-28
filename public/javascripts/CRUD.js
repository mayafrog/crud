// READ
function view_actors() {
    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 4. Handle response (callback function) */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            clear_table();
            var data = JSON.parse(this.responseText);
            var table = document.getElementById("results");

            for (i = 0; i < data.length; i++) {
                var row = table.insertRow(-1);
                var col1 = row.insertCell(0);
                var col2 = row.insertCell(1);
                col1.innerHTML = data[i].first_name;
                col2.innerHTML = data[i].last_name;
            }
        }
    };

    /* 2. Open connection */
    xhttp.open("GET", "/get_actors.json", true);

    /* 3. Send request */
    xhttp.send();
};

// CREATE
function send_new_actor() {
    firstname = document.getElementById("actor-first-name").value;
    lastname = document.getElementById("actor-last-name").value;

    // UPDATE PAGE WITH ACTOR WE JUST CREATED
    // var table = document.getElementById("results");
    // var row = table.insertRow(-1);
    // var col1 = row.insertCell(0);
    // var col2 = row.insertCell(1);
    // col1.innerHTML = firstname;
    // col2.innerHTML = lastname;

    // take it and turn into an object
    var body = {
        firstname: firstname,
        lastname: lastname
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 2. Open connection */
    xhttp.open("POST", "/create.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
};



// helper function
function clear_table() {
    document.getElementById("results").innerHTML = "";
}

// READ (SEARCH) USING POST W/ CALLBACK FUNCTION
function search_actors() {
    var search_name = document.getElementById("actor-search-name").value;

    // take it and turn into an object
    var body = {
        search_name: search_name,
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 4. Handle response (callback function) */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var table = document.getElementById("results");
            clear_table();

            for (i = 0; i < data.length; i++) {
                var row = table.insertRow(-1);
                var col1 = row.insertCell(0);
                var col2 = row.insertCell(1);
                col1.innerHTML = data[i].first_name;
                col2.innerHTML = data[i].last_name;
            }
        }
    };

    /* 2. Open connection */
    xhttp.open("POST", "/get_filtered_actors.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
};

// UPDATE
function update_actor() {
    old_firstname = document.getElementById("actor-first-name-old").value;
    old_lastname = document.getElementById("actor-last-name-old").value;
    new_firstname = document.getElementById("actor-first-name-new").value;
    new_lastname = document.getElementById("actor-last-name-new").value;

    // take it and turn into an object
    var body = {
        old_firstname: old_firstname,
        old_lastname: old_lastname,
        new_firstname: new_firstname,
        new_lastname: new_lastname
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 2. Open connection */
    xhttp.open("POST", "/update.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
};

// DELETE
function delete_actor() {
    firstname_delete = document.getElementById("actor-first-name-delete").value;
    lastname_delete = document.getElementById("actor-last-name-delete").value;

    // take it and turn into an object
    var body = {
        firstname_delete: firstname_delete,
        lastname_delete: lastname_delete
    };

    /* 1. Create new AJAX request */
    var xhttp = new XMLHttpRequest();

    /* 2. Open connection */
    xhttp.open("POST", "/delete.json", true);

    // xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    /* 3. Send request */
    xhttp.send(JSON.stringify(body));
};

//VUE
var vueinst = new Vue({
    el: "#vue",
    data: {
        selected: 'Update an actor',
    }
});