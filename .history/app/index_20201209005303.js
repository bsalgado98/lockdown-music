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
                url: './datasets/data_by_year.csv',
                delimeter: ',',
                datasetLabels: true,
                indexLabels: true
            }
        }
    }
});
