document.addEventListener('DOMContentLoaded', function() {
    // Data for initial chart
    var initialData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Options for the chart
    var chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Initialize the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: initialData,
        options: chartOptions
    });

    // Update data on button click
    var updateDataButton = document.getElementById('updateData');
    updateDataButton.addEventListener('click', function() {
        // Generate random data
        var newData = initialData.datasets[0].data.map(function() {
            return Math.floor(Math.random() * 20);
        });

        // Update chart with new data
        myChart.data.datasets[0].data = newData;
        myChart.update();
    });

    // Function examples (optional)
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function divide(a, b) {
        return a / b;
    }

    function multiply(a, b) {
        return a * b;
    }

    // Example variables
    var str = "Hello";
    var num = 42;
    var bool = true;

    // Console logs for demonstration
    console.log(add(5, 3)); // Example function call
    console.log(subtract(10, 4));
    console.log(divide(20, 5));
    console.log(multiply(7, 8));
});
