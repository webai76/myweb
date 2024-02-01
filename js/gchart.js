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
        pieHole: 0.3,
        backgroundColor: 'transparent',        
        chartArea: {left:10,top:0,width:'100%',height:'100%'},
        colors:['#56f5a8','#5ff580','#aae643','#c5e03f','#9cb9ff','#61d0ff','#39e1f7'],
        fontName: 'Source Sans Pro',
        fontSize: 15,
        tooltip:{textStyle:{color:'#303030'}},
        animation:{duration: 1000,easing: 'out', },
          vAxis: {minValue:0, maxValue:1000},


        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }