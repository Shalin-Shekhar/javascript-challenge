// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the 1st input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if (inputValue == "") {
        var filteredData1 = tableData;
    } else {
        var filteredData1 = tableData.filter(citing => citing.datetime === inputValue);
    }

    // Select the 2nd input element and get the raw HTML node
    var inputElement = d3.select("#city");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if (inputValue == "") {
        var filteredData2 = filteredData1;
    } else {
        var filteredData2 = filteredData1.filter(citing => citing.city === inputValue);
    }

    // Select the 3rd input element and get the raw HTML node
    var inputElement = d3.select("#state");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if (inputValue == "") {
        var filteredData3 = filteredData2;
    } else {
        var filteredData3 = filteredData2.filter(citing => citing.state === inputValue);
    }

    // Select the 4th input element and get the raw HTML node
    var inputElement = d3.select("#country");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if (inputValue == "") {
        var filteredData4 = filteredData3;
    } else {
        var filteredData4 = filteredData3.filter(citing => citing.country === inputValue);
    }

    // Select the 5th input element and get the raw HTML node
    var inputElement = d3.select("#shape");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    if (inputValue == "") {
        var filteredData = filteredData4;
    } else {
        var filteredData = filteredData4.filter(citing => citing.shape === inputValue);
    }

    console.log(filteredData);


    // Clear the table
    var table = document.getElementById("ufo-table");
    //or use :  var table = document.all.tableid;
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }


    // Set the span tag in the h1 element to the text
    // that was entered in the form
    filteredData.forEach((citingUfo) => {
        var row = tbody.append("tr");
        Object.entries(citingUfo).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});