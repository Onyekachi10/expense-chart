
"use strict"

const ctx = document.getElementById('myChart');
var barColors = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)",
"hsl(186, 34%, 60%)","hsl(10, 79%, 65%)","hsl(10, 79%, 65%)", 
"hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)"];

fetch("data.json").then(response => {
    return response.json()
}).then(data => {
    
    createChart(data, 'bar', barColors)
})

function createChart (data,type,color) {
    new Chart(ctx, {
        type: type,
        data: {
          labels: data.map(row => row.day),
          datasets: [{
            label: 'Expenses chart $',
            data: data.map( row=> row.amount),
            borderWidth: 1,
            backgroundColor: color,
            hoverBackgroundColor: [
                "#f6b0a2",
                "#f6b0a2",
                "#a0dae0",
                "#f6b0a2",
                "#f6b0a2",
                "#f6b0a2",
                "#f6b0a2",
            ],
          }]
        },
        options: {
            scales: {
                y: {
                    display: false,
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        font: {
                            size: 16, 
                            bodyColor: "#fff",
                        },
                    },
                },
            },
        }
      })
    
}

    




