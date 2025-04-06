document.addEventListener('DOMContentLoaded', function () {

    // --- FAKE DATA ---
    const monthlyRevenueLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyRevenueData = [15000, 17500, 16000, 19000, 21000, 20500, 23000, 24500, 22000, 25000, 27000, 28500];

    const productCategories = ['Electronics', 'Clothing', 'Home Goods', 'Groceries', 'Books'];
    const productSalesData = [35000, 28000, 22000, 18000, 12000]; // Total sales per category

    const regions = ['North', 'South', 'East', 'West', 'Central'];
    const regionSalesData = [45000, 30000, 25000, 38000, 15000];

    const acquisitionSources = ['Organic Search', 'Paid Ads', 'Social Media', 'Referral', 'Direct'];
    const sourceData = [40, 25, 15, 10, 10]; // Percentage or count

    const kpiData = {
        revenue: 213500,
        customers: 1250,
        aov: 170.80,
        conversion: 3.5
    };

    // --- KPI UPDATES ---
    document.getElementById('kpi-revenue').textContent = `$${kpiData.revenue.toLocaleString()}`;
    document.getElementById('kpi-customers').textContent = kpiData.customers.toLocaleString();
    document.getElementById('kpi-aov').textContent = `$${kpiData.aov.toFixed(2)}`;
    document.getElementById('kpi-conversion').textContent = `${kpiData.conversion.toFixed(1)}%`;


    // --- CHART CONFIGURATION ---
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false, // Important for container height control
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
             y: {
                beginAtZero: true,
                 ticks: {
                    // Format Y-axis ticks as currency for revenue chart if needed elsewhere
                    // callback: function(value, index, values) {
                    //     return '$' + value.toLocaleString();
                    // }
                 }
            }
        }
    };

    // --- RENDER CHARTS ---

    // 1. Monthly Revenue Chart (Line)
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: monthlyRevenueLabels,
            datasets: [{
                label: 'Monthly Revenue',
                data: monthlyRevenueData,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1 // Smooths the line slightly
            }]
        },
        options: { ...chartOptions } // Use shared options
    });

    // 2. Sales by Product Category (Bar)
    const productCtx = document.getElementById('productChart').getContext('2d');
    new Chart(productCtx, {
        type: 'bar',
        data: {
            labels: productCategories,
            datasets: [{
                label: 'Total Sales',
                data: productSalesData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            ...chartOptions,
             indexAxis: 'y', // Makes it a horizontal bar chart
             scales: {
                x: { // Note: axes swap for indexAxis: 'y'
                    beginAtZero: true,
                    ticks: {
                         callback: function(value) { return '$' + value.toLocaleString(); } // Format as currency
                    }
                }
             }
        }
    });

    // 3. Sales Distribution by Region (Bar)
     const regionCtx = document.getElementById('regionChart').getContext('2d');
    new Chart(regionCtx, {
        type: 'bar',
        data: {
            labels: regions,
            datasets: [{
                label: 'Sales by Region',
                data: regionSalesData,
                 backgroundColor: 'rgba(54, 162, 235, 0.6)', // Single color for this bar chart
                 borderColor: 'rgba(54, 162, 235, 1)',
                 borderWidth: 1
            }]
        },
       options: {
            ...chartOptions,
            scales: {
                 y: {
                    beginAtZero: true,
                     ticks: {
                         callback: function(value) { return '$' + value.toLocaleString(); } // Format as currency
                    }
                 }
            }
        }
    });


    // 4. Customer Acquisition Source (Doughnut)
    const sourceCtx = document.getElementById('sourceChart').getContext('2d');
    new Chart(sourceCtx, {
        type: 'doughnut',
        data: {
            labels: acquisitionSources,
            datasets: [{
                label: 'Acquisition Source',
                data: sourceData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            radius: '75%',      // Make the overall chart smaller
            cutout: '60%',      // Adjust the inner cutout size
            layout: {
                padding: 15     // Add some padding around the chart
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,  // Smaller legend items
                        padding: 10    // Reduced padding between legend items
                    }
                },
                tooltip: {
                    // Optional customization remains the same
                }
            }
        }
    });


});