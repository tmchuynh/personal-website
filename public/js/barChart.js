// Bar chart of popularity of languages

new Chart(document.getElementById("barChart"), {
    type: 'bar',
    data: {
        labels: ["JavaScript", "HTML/CSS", "SQL", "Python", "Java" < "Bash/Shell/PowerShell", "C#", "TypeScript", "PHP", "C++", "C", "Go", "Kotlin", "Ruby", "Swift", "R", "Rust", "Objective-C"],
        datasets: [{
            label: "title",
            data: [69, 63, 60, 42, 38, 34, 32, 28, 25, 20, 18, 10, 8, 7.5, 6.3, 6.1, 5.5, 4.9, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(128, 128, 128, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(128, 128, 128, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
        }],
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

