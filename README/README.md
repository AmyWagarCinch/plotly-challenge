# plotly-challenge Belly Button Biodiversity

In this assignment, I built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Step 1: Plotly

1. I used the D3 library to read in samples.json.

2. I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  Used sample_values as the values for the bar chart.
  Used otu_ids as the labels for the bar chart.
  Used otu_labels as the hovertext for the chart.


3. I created a bubble chart that displays each sample.

  Used otu_ids for the x values.
  Used sample_values for the y values.
  Used sample_values for the marker size.
  Used otu_ids for the marker colors.
  Used otu_labels for the text values.

4. I displayed the sample metadata, i.e., an individual's demographic information.

5. I displayed each key-value pair from the metadata JSON object on the page.

6. The plots are updated any time a new sample is selected.


