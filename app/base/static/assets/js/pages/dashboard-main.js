'use strict';
$(document).ready(function() {
    setTimeout(function() {
        floatchart()
    }, 100);
    // [ campaign-scroll ] start
    var px = new PerfectScrollbar('.customer-scroll', {
        wheelSpeed: .5,
        swipeEasing: 0,
        wheelPropagation: 1,
        minScrollbarLength: 40,
    });
    var px = new PerfectScrollbar('.customer-scroll1', {
        wheelSpeed: .5,
        swipeEasing: 0,
        wheelPropagation: 1,
        minScrollbarLength: 40,
    });
    var px = new PerfectScrollbar('.customer-scroll2', {
        wheelSpeed: .5,
        swipeEasing: 0,
        wheelPropagation: 1,
        minScrollbarLength: 40,
    });
    var px = new PerfectScrollbar('.customer-scroll3', {
        wheelSpeed: .5,
        swipeEasing: 0,
        wheelPropagation: 1,
        minScrollbarLength: 40,
    });
    // [ campaign-scroll ] end
});

function floatchart() {
    // [ seo-card1 ] start
    $(function() {
        var options1 = {
            chart: {
                type: 'area',
                height: 145,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#ff5370"],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: ['#ff869a'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 0.8,
                    stops: [0, 100, 100, 100]
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            series: [{
                data: [45, 35, 60, 50, 85, 70]
            }],
            yaxis: {
               min: 5,
               max: 90,
           },
            tooltip: {
                fixed: {
                    enabled: false
                },
                x: {
                    show: false
                },
                y: {
                    title: {
                        formatter: function(seriesName) {
                            return 'Ticket '
                        }
                    }
                },
                marker: {
                    show: false
                }
            }
        }
        new ApexCharts(document.querySelector("#seo-card1"), options1).render();
    });
    // [ seo-card1 ] end
    // [ customer-chart ] start
    $(function() {
        var options = {
            chart: {
                height: 150,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            labels: ['New', 'Return'],
            series: [39, 10],
            legend: {
                show: false
            },
            tooltip: {
                theme: 'datk'
            },
            grid: {
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            colors: ["#4680ff", "#2ed8b6"],
            fill: {
                opacity: [1, 1]
            },
            stroke: {
                width: 0,
            }
        }
        var chart = new ApexCharts(document.querySelector("#customer-chart"), options);
        chart.render();
        var options1 = {
            chart: {
                height: 150,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '75%'
                    }
                }
            },
            labels: ['New', 'Return'],
            series: [20, 15],
            legend: {
                show: false
            },
            tooltip: {
                theme: 'dark'
            },
            grid: {
                padding: {
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
            },
            colors: ["#fff", "#2ed8b6"],
            fill: {
                opacity: [1, 1]
            },
            stroke: {
                width: 0,
            }
        }
        var chart = new ApexCharts(document.querySelector("#customer-chart1"), options1);
        chart.render();
    });
    // [ customer-chart ] end
    // [ unique-visitor-chart ] start
    $(function() {
        var options = {
            chart: {
                height: 230,
                type: 'line',
                toolbar: {
                    show: false,
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            series: [{
                name: 'Arts',
                data: [20, 50, 30, 60, 30, 50]
            }, {
                name: 'Commerce',
                data: [60, 30, 65, 45, 67, 35]
            }],
            legend: {
                position: 'top',
            },
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000'],
                axisBorder: {
                    show: false,
                },
                label: {
                    style: {
                        color: '#ccc'
                    }
                },
            },
            yaxis: {
                show: true,
                min: 10,
                max: 70,
                labels: {
                    style: {
                        color: '#ccc'
                    }
                }
            },
            colors: ['#73b4ff', '#59e0c5'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    gradientToColors: ['#4099ff', '#2ed8b6'],
                    shadeIntensity: 0.5,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                },
            },
            markers: {
                size: 5,
                colors: ['#4099ff', '#2ed8b6'],
                opacity: 0.9,
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            grid: {
                borderColor: '#cccccc3b',
            }
        }
        var chart = new ApexCharts(document.querySelector("#unique-visitor-chart"), options);
        chart.render();
    });
    // [ unique-visitor-chart ] end
}
