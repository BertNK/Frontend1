import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['USD Balance', 'Crypto Balance'],
    datasets: [
      {
        label: 'Wallet',
        data: [50000, 192000], // Example money values
        backgroundColor: ['#4CAF50', '#2196F3'],
        borderColor: ['#ffffff'],
        borderWidth: 2, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '50%', // Makes it a ring chart
    plugins: {
      legend: {
        display: true,
        position: 'right', // Moves the legend to the right
        align: 'center', // Aligns legend items in a column
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
      margin: 'auto',
    }}>
      <div style={{ width: '90%', height: '100%' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
