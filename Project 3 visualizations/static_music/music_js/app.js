// Global variable to store data
let globalData;
 
// Initialize the dashboard
function init() {
    d3.json("spotify_complete_analysis.json").then(data => {
        globalData = data;
 
        // Get unique years from the raw_data
        const years = [...new Set(data.raw_data.map(d => d.year_released))].sort();
 
        // Populate year dropdown
        const yearSelect = d3.select("#yearSelect");
        years.forEach(year => {
            yearSelect.append("option")
                .text(year)
                .property("value", year);
        });
 
        // Set initial year to most recent
        const latestYear = years[years.length - 1];
        yearSelect.property("value", latestYear);
 
        updateDashboard(latestYear);
    }).catch(error => {
        console.error("Error loading data:", error);
    });
}
 
function updateDashboard(selectedYear) {
    // Filter data for selected year
    const yearData = globalData.raw_data.filter(d => d.year_released === parseInt(selectedYear));
 
    // Update all visualizations
    updateStats(yearData);
    updateGenreStreamsChart(yearData);
    updateGenreCountChart(yearData);
    updateTrendChart(selectedYear);
}
 
function updateStats(yearData) {
    const statsDiv = d3.select("#statsContent");
 
    // Calculate statistics
    const totalSongs = yearData.length;
    const totalStreams = yearData.reduce((sum, d) => sum + d.spotify_streams, 0);
    const uniqueGenres = new Set(yearData.flatMap(d => d.song_genres)).size;
 
    // Update stats display
    statsDiv.html(`
        <p><strong>Total Songs:</strong> ${totalSongs.toLocaleString()}</p>
        <p><strong>Total Streams:</strong> ${totalStreams.toLocaleString()}</p>
        <p><strong>Unique Genres:</strong> ${uniqueGenres}</p>
    `);
}
 
function updateGenreStreamsChart(yearData) {
    // Aggregate streams by genre
    const genreStreams = {};
    yearData.forEach(track => {
        const genres = track.song_genres.split(',').map(g => g.trim());
        genres.forEach(genre => {
            genreStreams[genre] = (genreStreams[genre] || 0) + track.spotify_streams;
        });
    });
 
    // Prepare data for chart
    const sortedData = Object.entries(genreStreams)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
 
    const trace = {
        x: sortedData.map(d => d[1]),
        y: sortedData.map(d => d[0]),
        type: 'bar',
        orientation: 'h',
        marker: { color: '#1DB954' }
    };
 
    const layout = {
        title: 'Top 10 Genres by Streams',
        xaxis: { title: 'Total Streams' },
        yaxis: { title: 'Genre' },
        margin: { l: 150, r: 50, t: 50, b: 50 }
    };
 
    Plotly.newPlot('genreStreamsChart', [trace], layout);
}
 
function updateGenreCountChart(yearData) {
    // Count songs per genre
    const genreCounts = {};
    yearData.forEach(track => {
        const genres = track.song_genres.split(',').map(g => g.trim());
        genres.forEach(genre => {
            genreCounts[genre] = (genreCounts[genre] || 0) + 1;
        });
    });
 
    const sortedData = Object.entries(genreCounts)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10);
 
    const trace = {
        values: sortedData.map(d => d[1]),
        labels: sortedData.map(d => d[0]),
        type: 'pie',
        hole: 0.4
    };
 
    const layout = {
        title: 'Genre Distribution',
        height: 400
    };
 
    Plotly.newPlot('genreCountChart', [trace], layout);
}
 
function updateTrendChart(selectedYear) {
    // Calculate yearly totals
    const yearlyTotals = {};
    globalData.raw_data
        .filter(d => d.year_released <= parseInt(selectedYear))
        .forEach(track => {
            yearlyTotals[track.year_released] = (yearlyTotals[track.year_released] || 0) + track.spotify_streams;
        });
 
    const trace = {
        x: Object.keys(yearlyTotals),
        y: Object.values(yearlyTotals),
        type: 'scatter',
        mode: 'lines+markers',
        line: { color: '#1DB954' }
    };
 
    const layout = {
        title: 'Streaming Trends Over Time',
        xaxis: { title: 'Year' },
        yaxis: { title: 'Total Streams' }
    };
 
    Plotly.newPlot('trendChart', [trace], layout);
}
 
// Event handler for year selection
d3.select("#yearSelect").on("change", function() {
    updateDashboard(this.value);
});
 
// Initialize the dashboard
init();