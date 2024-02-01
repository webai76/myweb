google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['ability', 'Natural ability'],
          ['Creativity',     15],
          ['Adaptability ',  20],
          ['Responsibility', 20],
          ['Sociability ',   15],
          ['Collaboration',  10],
          ['Quick learning', 10],
          ['Time management',10],
        ]);

        var options = {
        legend: 'none',
        pieSliceText: 'label',      
        pieStartAngle: 100,
        pieSliceTextStyle: {color: '#fff', fontName: 'Source Sans Pro', fontSize: 16}, 
        pieHole: 0.3,
        backgroundColor: 'transparent',        
        chartArea: {left:10,top:0,width:'100%',height:'100%'},
        colors:['#a8243b','#ed5f5d','#e9b052','#97be54','#12ad87','#2799a3','#35403c'],
        fontName: 'Source Sans Pro',
        fontSize: 15,
        tooltip:{textStyle:{color:'#303030'}},
        animation:{duration: 1000,easing: 'out', },
        vAxis: {minValue:0, maxValue:1000},


        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }