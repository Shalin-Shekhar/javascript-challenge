// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Check if Input value is not passed yet
    if (inputValue == "") {
        var filteredData = tableData;
    } else {
        var filteredData = tableData.filter(citing => citing.datetime === inputValue);
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