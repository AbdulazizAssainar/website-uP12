"use strict";
function calc() {
    var capGet = document.getElementById("capital").value;
    var perGet = document.getElementById("persentage").value;
    var daysGet = document.getElementById("days").value;
    var balance = capGet;
    var array = [];
    if (capGet == 0 || perGet == 0 || daysGet == 0)
        return alert("Please Insert all entries");
    for (let i = 0; i < Number(daysGet); i++) {
        const last = balance;
        balance += balance * (perGet / 100);
        array[i] = { number: i, last: last, net: balance - last };
    }
    var balSet = parseInt(balance);
    var net = balSet - capGet;
    document.getElementById("capIS").innerText = balSet;
    document.getElementById("netIS").innerText = net;
    console.log(JSON.parse(JSON.stringify(array)));
    createTable(JSON.parse(JSON.stringify(array)));
}
function createTable(tableData) {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    // creating all cells
    for (let i = 0; i < tableData.parse.length; i++) {
        // creates a table row
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const cellText = document.createTextNode(tableData.parse.name);
        cell.appendChild(cellText);
        row.appendChild(cell);
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
}
