d3.csv('./datasets/data_by_year.csv')

function makeChart(players) {
    const ctx = document.getElementById('chart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        plugins: [ChartDataSource],
        options: {
            title: {
                display: true,
                text: 'Estoy en mi pique'
            },
            plugins: {
                datasource: {
                    type: 'csv',
                    url: './datasets/data_by_year.xlsx',
                    datasetLabels: 'data_by_year!B1:B1',
                    indexLabels: 'data_by_year!B81:B101',
                    data: 'data_by_year!I81:I101'
                }
            }
        }
    });
}