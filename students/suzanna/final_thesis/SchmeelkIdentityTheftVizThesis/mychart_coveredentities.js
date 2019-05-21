var ctx = document.getElementById('myChart_coveredentities').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    scaleFontColor: 'rgb(0,0,0)',
    // The data for our dataset
    data: {
        labels: ['Healthcare Provider', 'Health Plan', 'Business Associate'],
        datasets: [{
            label:  "Count Investigated by OCR",
            backgroundColor: 'rgb(0,0,0)',
            borderColor: 'rgb(0,0,0)',
            hoverBackgroundColor: 'rgb(255,255,255)',
            data: [241, 43, 44] 
        }]
    },

    // Configuration options go here
    options: {
         legend: {
            display: true,
            labels: {
                fontColor: 'white'
            }
        },
scaleFontColor: 'rgb(0,0,0)',
 scales: {
           xAxes: [{ 
                gridLines: {
                    display: false,
                },
                ticks: {
                  fontColor: 'rgb(255,255,255)', // this here
                },
            }],
            yAxes: [{
                 ticks: {
                    suggestedMin: 0,
                    suggestedMax: 250,
                    fontColor: 'rgb(255,255,255)'
                },
            override: {
                    stepWidth: 10,
                    start: 0,
                    steps: 10
                }
            }]
        }

    }
});
