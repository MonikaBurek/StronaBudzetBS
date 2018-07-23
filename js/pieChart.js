
function createPieChart()
{
var ctx = document.getElementById("chart");
var chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Mieszkanie', 'Transport', 'Telekomunikacja', 'Opieka zdrowotna', 'Oszczednosci'],
        datasets: [{
			label: "zestawnie",
            data: [658, 10, 50, 56, 70 ],

            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255,99,132,0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderWidth: 1,
			hoverBackgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    },
    options: {
		responsive: true,
		legend: {
			position:'right',
			labels:{
				fontColor:'#092834'
			}
		},
		title: {
			display: true,
			text: 'Zestawienie wydatków wg kategorii',
			fontSize: 16,
			fontColor: '#092834'
		}
	}
        
});
}

