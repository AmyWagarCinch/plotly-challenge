// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
 console.log(data)
 var samples = data.samples[0]
    var trace1 = {
        x: samples.otu_ids,
        y: samples.sample_values,
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
  
  // Promise Pending
  //const dataPromise = d3.json(url);
  //console.log("Data Promise: ", dataPromise);

