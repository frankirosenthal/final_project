// TIMELINE - This code and switch statement was adapted from Professor McAdams' JSFiddle, as well as from my own music sampler project: https://jsfiddle.net/macloo/p24vrczo/

let musicClips = document.querySelectorAll('.music');
let albumCovers = document.querySelectorAll('.cover');

function hideAll() {
  musicClips.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCovers.forEach(function(el) {
  el.onclick = (e) => {hideAll();

switch (e.target.getAttribute('id')) {
      case 'westSideStoryAlbum':
        document.querySelector('#westsidestorymusic')
        .style.display = 'block';
        break;
      case 'fiddlerAlbum':
        document.querySelector('#fiddlermusic')
        .style.display = 'block';
        break;
      case 'greaseAlbum':
        document.querySelector('#greasemusic')
        .style.display = 'block';
        break;
      case 'phantomAlbum':
        document.querySelector('#phantommusic')
        .style.display = 'block';
        break;
      case 'rentAlbum':
        document.querySelector('#rentmusic')
        .style.display = 'block';
        break;
      case 'mammaMiaAlbum':
        document.querySelector('#mammamiamusic')
        .style.display = 'block';
        break;
      case 'hairsprayAlbum':
        document.querySelector('#hairspraymusic')
        .style.display = 'block';
        break;
      case 'mormonAlbum':
        document.querySelector('#mormonmusic')
        .style.display = 'block';
        break;
      case 'kinkyBootsAlbum':
        document.querySelector('#kinkybootsmusic')
        .style.display = 'block';
        break;
      case 'dehAlbum':
        document.querySelector('#dehmusic')
        .style.display = 'block';
        break;
      case 'hamiltonAlbum':
        document.querySelector('#hamiltonmusic')
        .style.display = 'block';
        break;
      case 'waitressAlbum':
        document.querySelector('#waitressmusic')
        .style.display = 'block';
        break;
      case 'frozenAlbum':
        document.querySelector('#frozenmusic')
        .style.display = 'block';
        break;
      case 'meanGirlsAlbum':
        document.querySelector('#meangirlsmusic')
        .style.display = 'block';
        break;
      }

  let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });
    }

  });

  // TRIVIA

  let divs = document.querySelectorAll('.answers');

  // check if the clicked element has a certain class
  // change its color based on its class
  divs.forEach(function(el) {
    el.onclick = (e) => {
      if ( e.target.classList.contains("wrong") ) {
        e.target.style.background = "#c00";
      } else {
        e.target.style.background = "#0c0";
      }
    }
  });

// HIGHCHART - This code was taken from and adapted from Highcharts as one of the demo scatterplot examples

Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Changes in Broadway Attendance and Revenue through the seasons'
    },
    subtitle: {
        text: 'Source: Broadwayleague.com'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Attendance (millions)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Revenue (millions)'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 90,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>'
            }
        }
    },
    series: [{
        name: '1985-1986',
        color: 'rgba(223, 83, 83, .5)',
        data: [[6.54, 191]]

    }, {
        name: '1990-1991',
        color: 'rgba(223, 83, 83, .5)',
        data: [[11.39, 603]]
    }, {
    		name: '1995-1996',
        color: 'rgba(223, 83, 83, .5)',
        data: [[9.47, 436]]
    }, {
    		name: '2000-2001',
        color: 'rgba(223, 83, 83, .5)',
        data: [[11.90, 666]]
    }, {
    		name: '2005-2006',
        color: 'rgba(223, 83, 83, .5)',
        data: [[12.00, 862]]
    }, {
    		name: '2010-2011',
        color: 'rgba(223, 83, 83, .5)',
        data: [[12.53, 1081]]
    }, {
    		name: '2015-2016',
        color: 'rgba(223, 83, 83, .5)',
        data: [[13.32, 1373]]
    }, {
    		name: '2018-2019',
        color: 'rgba(223, 83, 83, .5)',
        data: [[14.77, 1829]]
    }]
});
