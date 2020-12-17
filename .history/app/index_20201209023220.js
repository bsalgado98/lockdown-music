d3.csv('./datasets/data_by_year.csv').then(makeChart)

const DARK_BLUE = "#073b4c"
const PINK = "#ef476f"
const YELLOW = "#ffd166"
const GREEN = "#06d6a0"
const LIGHT_BLUE = "#118ab2"

function makeChart(csvData) {
    const ctx = document.getElementById('chart1').getContext('2d');

    const yearLabels = csvData.map((d) => d.year)
    const loudnessData = csvData.map((d) => d.loudness)
    console.log(loudnessData)
    const yearVsLoudness = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearLabels,
            datasets: [
                {
                    data: loudnessData,
                    borderColor: [YELLOW]
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: PINK
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: PINK
                    }
                }]
            }
        }
    })
    // const myChart = new Chart(ctx, {
    //     type: 'bar',
    //     plugins: [ChartDataSource],
    //     options: {
    //         title: {
    //             display: true,
    //             text: 'Estoy en mi pique'
    //         },
    //         plugins: {
    //             datasource: {
    //                 type: 'csv',
    //                 url: './datasets/data_by_year.xlsx',
    //                 datasetLabels: 'data_by_year!B1:B1',
    //                 indexLabels: 'data_by_year!B81:B101',
    //                 data: 'data_by_year!I81:I101'
    //             }
    //         }
    //     }
    // });
}