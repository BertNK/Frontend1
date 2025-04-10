import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "/src/css/Global.css";
import "./comicgraph.css";

// Dit is de comicgraph die ik van ChartJS heb

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ComicGraph() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Number of Issues Published",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    fetch("http://localhost:4000/api/comics")
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          const comicCounts = {};
          // count occurrences of comics by series
          data.results.forEach((comic) => {
            const seriesName = comic.volume?.name || comic.name;
            if (seriesName) {
              comicCounts[seriesName] = (comicCounts[seriesName] || 0) + 1;
            }
          });
          // prepare chart data
          const seriesNames = Object.keys(comicCounts);
          const seriesCounts = Object.values(comicCounts);
          // update chartData with the computed values
          setChartData({
            labels: seriesNames,
            datasets: [
              {
                label: "Number of Issues Published",
                data: seriesCounts,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          });
        }
      })
      .catch((error) => console.error("Error fetching comics:", error));
  }, []);

  return (
    <div className="graphContainer">
      <h2 className="graphTitle">Most Published Comic Series</h2>
      <div className="chartWrapper">
        <Bar
          className="graphBox"
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Most Published Top 50 New Comics",
                font: {
                  size: 18,
                  weight: 'bold',
                  family: 'Arial',
                },
                color: 'black',
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.raw} issues`,
                },
                titleFont: {
                  size: 14,
                  weight: 'normal',
                },
                bodyFont: {
                  size: 14,
                },
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleColor: 'white',
                bodyColor: 'rgba(75, 192, 192, 1)',
              },
              legend: {
                labels: {
                  color: 'black',
                  font: {
                    size: 14,
                  },
                },
              },
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: "Number of Issues",
                  color: 'black',
                  font: {
                    size: 16,
                    weight: 'bold',
                  },
                },
                beginAtZero: true,
                ticks: {
                  color: 'black',
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default ComicGraph;
