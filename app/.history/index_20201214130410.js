import regression from 'https://cdn.skypack.dev/regression';

d3.csv('./datasets/data_by_year.csv').then(loudDanceChart)

const DARK_BLUE = "#073b4c"
const PINK = "#ef476f"
const YELLOW = "#ffd166"
const GREEN = "#06d6a0"
const LIGHT_BLUE = "#118ab2"

const axisColor = YELLOW
const dataColor = PINK

function loudDanceChart(csvData) {
    const loudCanvas = document.getElementById('yearVsLoudness')
    const loudCtx = loudCanvas.getContext('2d')
    const loudRect = loudCanvas.parentNode.getBoundingClientRect()
    loudCanvas.width = loudRect.width
    loudCanvas.height = loudRect.height * 0.4

    const danceCanvas = document.getElementById('yearVsDance')
    const danceCtx = danceCanvas.getContext('2d')
    const danceRect = danceCanvas.parentNode.getBoundingClientRect()
    danceCanvas.width = danceRect.width
    danceCanvas.height = danceRect.height * 0.4

    const yearLabels = csvData.map((d) => d.year).slice(-20)
    const loudnessData = csvData.map((d) => d.loudness).slice(-20)
    const loudnessRegression = loudnessData.map(e, i => {
        return [i, e]
    })

    const danceData = csvData.map((d) => d.danceability).slice(-20)
    const yearVsLoudness = new Chart(loudCtx, {
        type: 'line',
        data: {
            labels: yearLabels,
            datasets: [
                {
                    data: loudnessData,
                    borderColor: [dataColor],
                    label: 'Loudness',
                },
                // Interpolation
                {
                    data: [loudnessData[0], "", loudnessData[loudnessData.length - 1]],
                    borderColor: YELLOW,
                }
            ]
        },
        options: {
            legend: {
                labels: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Loudness (dB)',
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
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
                    borderColor: [dataColor],
                    label: 'Danceability',
                },
            ]
        },
        options: {
            legend: {
                labels: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Danceability (0.0 - 1.0)',
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    }
                }]
            }
        }
    })
}

const genreData = {
    labels: [['Artist', 'of the Year'], ['New Artist', 'of the Year'], ['Collaboration', 'of the Year'], ['Favorite', 'Social Artist'], ['Favorite', 'Music Video']],
    datasets: [{
        label: 'Hip-Hop',
        backgroundColor: PINK,
        data: [3, 5, 3, 0, 2]
    },
    {
        label: 'Pop/Rock',
        backgroundColor: YELLOW,
        data: [2, 1, 2, 2, 2]
    },
    {
        label: 'K-Pop', // social artist is fan voted
        backgroundColor: GREEN,
        data: [0, 0, 0, 3, 0]
    },
    ]
}
const genreCanvas = document.getElementById('genre-winners')
const genresCtx = genreCanvas.getContext('2d')
let genresRect = genreCanvas.parentNode.getBoundingClientRect()
genreCanvas.width = genresRect.width
genreCanvas.height = genresRect.height * 0.4
const genreCtx = document.getElementById('genre-winners').getContext('2d');
const genreChart = new Chart(genreCtx, {
    type: 'bar',
    data: genreData,
    options: {
        responsive: true,
        legend: {
            labels: {
                fontFamily: 'Helvetica',
                fontColor: axisColor,
                fontSize: 18,
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                    precision: 0
                },
                scaleLabel: {
                    display: true,
                    labelString: '# of Awards',
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                }
            }],
            xAxes: [{
                ticks: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                },
                scaleLabel: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                    labelString: 'Award Category'
                }
            }]
        }
    },
})

d3.json('./datasets/grammys_genres.json').then(genresChart)

function genresChart(jsonData) {
    const acceptableGenres = ['r&b', 'rap', 'jazz', 'rock', 'folk', 'indie', 'pop', 'country', 'soul', 'dance', 'edm', 'metal', 'escape room', 'new age', 'ambient', 'meditation']
    const grammysGenresCanvas = document.getElementById('grammys-genres')
    const grammysGenresCtx = grammysGenresCanvas.getContext('2d')
    let grammysGenresRect = grammysGenresCanvas.parentNode.getBoundingClientRect()
    grammysGenresCanvas.width = grammysGenresRect.width
    grammysGenresCanvas.height = grammysGenresRect.height * 0.45

    const grammysGenresData = {}
    for (genre of Object.values(jsonData)) {
        if (grammysGenresData[genre]) {
            grammysGenresData[genre] += 1
        }
        else {
            grammysGenresData[genre] = 1
        }
    }
    const grammysGenresChart = new Chart(grammysGenresCtx, {
        type: 'bar',
        data: {
            labels: acceptableGenres,
            datasets: [
                {
                    data: Object.values(grammysGenresData),
                    label: 'Genres',
                    backgroundColor: dataColor
                },
            ]
        },
        options: {
            responsive: true,
            legend: {
                labels: {
                    fontFamily: 'Helvetica',
                    fontColor: axisColor,
                    fontSize: 18,
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '# of Winners',
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    },
                    scaleLabel: {
                        fontFamily: 'Helvetica',
                        fontColor: axisColor,
                        fontSize: 18,
                    }
                }]
            }
        }
    })
}

