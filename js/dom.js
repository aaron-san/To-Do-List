//Alt + O + L (Open live server)
//First open console in browser (F12)
//Ctrl + / (Comment)
// console.dir(document);

// console.log(document.domain); //local host
// console.log(document.URL); //URL
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// header.style.borderBottom = 'solid 3px lightgray';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';


// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "lightgray"
// }

// items[1].style.backgroundColor = '#f4f4f4';

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

// Can use any css selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px lightgray';

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"');
// submit.value = "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = "blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "coral";

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "#f4f4f4";
// }

// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = '#f4f4f4';
// }


// window.onload = function() {
// var b = document.getElementById('btnly');
// b.addEventListener('click', buttonClick);
// }


// const bt = document.querySelector("#btnly");
// console.log(bt === null);


// var b = document.getElementById('btnly');
// b.addEventListener('click', buttonClick);

// function buttonClick() {
//     console.log("Button clicked");
// }





// function buttonClick(e) {
//     // console.log("Button clicked");
//     // document.getElementById('header-title').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = "#f4f4f4";
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     console.log(e.type);
//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>' + e.target.id + '</h3>'
// }


function Hello() {
    // console.log("Hello")
    document.getElementById("di").innerHTML = "Wow!"
}

function changeCont() {
    document.getElementById("btn").addEventListener("click",
        function() {
            document.getElementById("welcome").innerHTML = "I changed!";
        })
}


// var today = new Date();
// console.log(today.getFullYear());

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)
// form.addEventListener('submit', runEvent)

// function runEvent(e) {
//     e.preventDefault();
//     console.log('Event TYPE: ' + e.type);
// }




















var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: '# of bees',
            data: [860, 1140, 3060, 560, 1070, 1110, 1330, 2210, 7830, 2478],
            borderColor: "red",
            fill: false
        }, {
            data: [1600, 1700, 1700, 1900, 1400, 2700, 4000, 5000, 6000, 7000],
            borderColor: "green",
            fill: false
        }, {
            data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: { display: false }
    }
})






// Initialize the echarts instance based on the prepared dom
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
// var option;

// Specify the configuration items and data for the chart

option = {
    title: {
        text: 'Distribution of Electricity',
        subtext: 'Fake Data'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // prettier-ignore
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
                lte: 6,
                color: 'green'
            },
            {
                gt: 6,
                lte: 8,
                color: 'red'
            },
            {
                gt: 8,
                lte: 14,
                color: 'green'
            },
            {
                gt: 14,
                lte: 17,
                color: 'red'
            },
            {
                gt: 17,
                color: 'green'
            }
        ]
    },
    series: [{
        name: 'Electricity',
        type: 'line',
        smooth: true,
        // prettier-ignore
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        markArea: {
            itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
            },
            data: [
                [{
                        name: 'Morning Peak',
                        xAxis: '07:30'
                    },
                    {
                        xAxis: '10:00'
                    }
                ],
                [{
                        name: 'Evening Peak',
                        xAxis: '17:30'
                    },
                    {
                        xAxis: '21:15'
                    }
                ]
            ]
        }
    }]
};

option && myChart.setOption(option);