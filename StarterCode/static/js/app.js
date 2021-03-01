// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
    var trace1 = {
        x: data.otu_ids,
        y: data.sample_values,
        type: "bar",
        orientation: 'h',
        text: data.otu_labels
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

// var trace1 = {
//     x: otu_ids,
//     y: sample_values,
//     type: "bar",
//     orientation: 'h',
//     text: otu_labels
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: "Gross Chart",
//     xaxis: { title: "Title" },
//     yaxis: { title: "Metascore (Critic) Rating"}
//   };
  
//   Plotly.newPlot("bar", data, layout);