var id = 0;
function getData(tagId) {
    var information = document.getElementById(tagId);
    return information.innerText;
}



function addName() {
    var name = prompt("please enter a name?");
    if (name !== '' && name != null) {
        id++;
        addDataToTableName(name, id);
    }
}

function addAge() {
    var age = prompt("please enter a age?");
    if (age !== '' && age != null) {
        id++;
        addDataToTableAge(age, id);
    }
}

function addMark() {
    var mark = prompt("please enter a mark?");
    if (mark !== '' && mark != null) {
        id++;
        addDataToTableMark(mark, id);
    }
}

function addDataToTableName(name, recordId) {
    var table = document.getElementById('nameData');
    var tableRow = document.createElement('tr');
    var recordData = document.createElement('td');
    recordData.id = id;
    recordData.innerHTML = name;
    tableRow.appendChild(recordData);
    var recordAction = document.createElement('td');
    
    tableRow.appendChild(recordAction);
    table.appendChild(tableRow);
}

function addDataToTableAge(age, recordId) {
    var table = document.getElementById('nameData');
    var tableRow = document.createElement('tr');
    var recordData = document.createElement('td');
    recordData.id = id;
    recordData.innerHTML = age;
    tableRow.appendChild(recordData);
    var recordAction = document.createElement('td');
    
    tableRow.appendChild(recordAction);
    table.appendChild(tableRow);
}

function addDataToTableMark(mark, recordId) {
    var table = document.getElementById('nameData');
    var tableRow = document.createElement('tr');
    var recordData = document.createElement('td');
    recordData.id = id;
    recordData.innerHTML = mark;
    tableRow.appendChild(recordData);
    var recordAction = document.createElement('td');
    
    tableRow.appendChild(recordAction);
    table.appendChild(tableRow);
}



