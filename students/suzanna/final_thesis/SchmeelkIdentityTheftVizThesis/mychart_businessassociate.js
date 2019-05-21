var ctx = document.getElementById('myChart_businessassociate').getContext('2d');

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    scaleFontColor: 'rgb(0,0,0)',
    // The data for our dataset
    data: {
        labels: ['Hacking/IT', 'Disclosure', 'Disposal', 'Theft', 'Loss'],
        datasets: [{
            label:  "OCR Count of Individuals Affected",
            backgroundColor: 'rgb(0,0,0)',
            borderColor: 'rgb(0,0,0)',
            hoverBackgroundColor: 'rgb(255,255,255)',
            data: [5635819, 707181, 0, 15717, 0] 
        }]
    },

    // Configuration options go here
    options: {
         legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255,255,255)'
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
                    suggestedMax: 6000000,
                    fontColor: 'rgb(255,255,255)',
                    callback: function(label, index, labels) {
        switch (label) {
            case 0:
                return '0';
            case 1000000:
                return '1M';
            case 2000000:
                return '2M';
            case 3000000:
                return '3M';
            case 4000000:
                return '4M';
            case 5000000:
                return '5M';
            case 6000000:
                return '6M';
        }
    }
                },
            }]
        }

    }
});
