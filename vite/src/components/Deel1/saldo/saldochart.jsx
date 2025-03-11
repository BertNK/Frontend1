import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Savings', 'Investments', 'Expenses', 'Debt'],
    datasets: [
      {
        label: 'Money Distribution',
        data: [5000, 3000, 2000, 1000], // Example money values
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
        borderColor: ['#ffffff'],
        borderWidth: 2,
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
  };

  return (
    <div style={{ 
      width: '80%', 
      height: '80%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      margin: 'auto'
    }}>
      <div style={{ width: '100%', height: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
