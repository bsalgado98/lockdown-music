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
                url: './datasets/regional-global-daily-latest.csv',
                delimeter: ',',
                datasetLabels: true,
                indexLabels: true
            }
        }
    }
});
