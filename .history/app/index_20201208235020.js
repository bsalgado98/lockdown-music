const ctx = document.getElementById('chart1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    plugins: [ChartDataSource]
});
