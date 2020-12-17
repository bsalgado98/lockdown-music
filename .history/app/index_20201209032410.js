d3.csv('./datasets/data_by_year.csv').then(makeChart)

const DARK_BLUE = "#073b4c"
const PINK = "#ef476f"
const YELLOW = "#ffd166"
const GREEN = "#06d6a0"
const LIGHT_BLUE = "#118ab2"

function makeChart(csvData) {
    const loudCtx = document.getElementById('yearVsLoudness').getContext('2d');
    const danceCtx = document.getElementById('yearVsDance').getContext('2d');

    const yearLabels = csvData.map((d) => d.year).slice(-20)
    const loudnessData = csvData.map((d) => d.loudness).slice(-20)
    const danceData = csvData.map((d) => d.danceability).slice(-20)
    const yearVsLoudness = new Chart(loudCtx, {
        type: 'line',
        data: {
            labels: yearLabels,
            datasets: [
                {
                    data: loudnessData,
                    borderColor: [YELLOW],
                    label: 'Loudness',
                },
            ]
        },
        options: {
            legend: {
                labels: {
                    fontFamily: 'Helvetica',
                    fontColor: GREEN,
                    fontSize: 18,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Loudness (dB)',
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    }
                }]
            }
        }
    })
    const yearVsDance = new Chart(danceCtx, {
        type: 'line',
        data: {
            labels: yearLabels,
            datasets: [
                {
                    data: danceData,
                    borderColor: [YELLOW],
                    label: 'Loudness',
                },
            ]
        },
        options: {
            legend: {
                labels: {
                    fontFamily: 'Helvetica',
                    fontColor: GREEN,
                    fontSize: 18,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Loudness (dB)',
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        fontFamily: 'Helvetica',
                        fontColor: GREEN,
                        fontSize: 18,
                    }
                }]
            }
        }
    }