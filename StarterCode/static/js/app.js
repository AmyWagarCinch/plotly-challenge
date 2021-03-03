// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
 console.log(data)
 var samples = data.samples

 var tempID = updatePlotly();
 selectedIDs = samples.filter(selectedD => selectedD.id === tempID);
 console.log(selectedIDs)

    var trace1 = {
        x: selectedIDs[0].otu_ids.slice(0,11).reverse(),
        y: selectedIDs[0].sample_values.slice(0,11).reverse(),
        type: "bar",
        orientation: 'h',
        text: samples.otu_labels
      };
      
      var data = [trace1];
      
      var layout = {
        title: "Gross Chart",
        xaxis: { title: "Title" },
        yaxis: { title: "blah blah blah"}
      };
      
      Plotly.newPlot("bar", data, layout); 
  });
  

  // Call updatePlotly() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updatePlotly);

// This function is called when a dropdown menu item is selected
function updatePlotly() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");

  d3.json("samples.json").then(function(data) {
    var sampleNames = data.names

    sampleNames.forEach((sample) => { dropdownMenu.append("option")
    .text(sample)
    .property("value", sample); 
   
    });
  
    //var selectedDate = d3.select("#datetime").node().value;
    return dropdownMenu.value
 
}

init();

