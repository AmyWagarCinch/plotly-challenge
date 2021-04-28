function MetaDataBuild(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      
      var results = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = results[0];
      
      var panel = d3.select("#sample-metadata");
  
      //Clears existing metadata
      panel.html("");
  
        //Key-Value Pairs
      Object.entries(result).forEach(([key, value]) => {
        panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
      
    });
  }
  
  function ChartBuild(sample) {
    d3.json("samples.json").then((data) => {
      var samples = data.samples;
      var results = samples.filter(sampleObject => sampleObject.id == sample);
      var result = results[0];
  
      var otu_ids = result.otu_ids;
      var otu_labels = result.otu_labels;
      var sample_values = result.sample_values;
  
      //Bubble Chart
      var layout1 = {
        title: "Bacteria Cultures Per Sample",
        margin: { t: 0 },
        hovermode: "closest",
        xaxis: { title: "OTU ID" },
        margin: { t: 30}
      };
      var data1 = [
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            size: sample_values,
            color: otu_ids,
            colorscale: "Earth"
          }
        }
      ];
  
      Plotly.newPlot("bubble", data1, layout1);
  
      //Bar Chart
      var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
      var data2 = [
        {
          y: yticks,
          x: sample_values.slice(0, 10).reverse(),
          text: otu_labels.slice(0, 10).reverse(),
          type: "bar",
          orientation: "h",
        }
      ];
  
      var layout2 = {
        title: "Top 10 Bacteria Cultures Found",
        margin: { t: 30, l: 150 }
      };
  
      Plotly.newPlot("bar", data2, layout2);
    });
  }
  
  //init function
  function init() {
    
    var selector = d3.select("#selDataset");
  
    
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
  
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      
      var sample1 = sampleNames[0];
      ChartBuild(sample1);
      MetaDataBuild(sample1);
    });
  }
  
  function optionChanged(newSample) {
    
    ChartBuild(newSample);
    MetaDataBuild(newSample);
  }
  
  
  init();