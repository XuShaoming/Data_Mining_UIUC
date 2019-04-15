d3.csv("https://raw.githubusercontent.com/XuShaoming/Data_Mining_UIUC/master/Data_Visualization/Examples/MultiLineGraph/stocks.csv", function(error, data) {
    // var cols = d3.keys(data[0]);
    // console.log(cols);
    // console.log(cols[1])
    var dataNest = d3.nest()
        .key(function(d) {return data[0];})
        .entries(data);

});