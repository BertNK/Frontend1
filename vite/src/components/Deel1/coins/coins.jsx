import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const LineChart = () => {
  const data = {
    labels: ['-', '--', 'Crud oil', 'Doge', 'Ethereum', 'Bitcoin'],
    datasets: [
      {
        label: 'All coins value($)',
        data: [500, 2000, 3000, 4000, 34000, 83000],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(33, 150, 243, 0.5)',
        borderWidth: 3,
        pointBackgroundColor: '#2196F3',
        pointBorderColor: '#2196F3',
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 25,
          },
        },
      },
      tooltip: {
        titleFont: {
          size: 25,
        },
        bodyFont: {
          size: 25,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 20,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
      y: {
        ticks: {
          color: 'white',
          font: {
            size: 20,
          },
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  return (
    <div style={{ 
      width: '80%', 
      height: '40%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: 'auto'
    }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
