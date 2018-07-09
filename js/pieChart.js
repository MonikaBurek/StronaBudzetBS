// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart()
 {
var data = google.visualization.arrayToDataTable([
['Kwota  przychodu', 'zł'],
['Mieszkanie', 658],
['Transport', 10],
['Telekomuni- kacja',16],
['Opieka zdrowotna', 56],
]);

 // Optional; add a title and set the width and height of the chart
var options = {'title':'Zestawienie wydatków wg kategorii.','height':350, 'width':540};

// Display the chart inside the <div> element with id="piechart"
var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}

