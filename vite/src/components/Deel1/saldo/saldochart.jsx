import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './saldochart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['USD Balance', 'Crypto Balance'],
    datasets: [
      {
        label: 'Wallet',
        data: [50000, 192000], // Example money values
        backgroundColor: ['#4CAF50', '#2196F3'], // Balance colors remain unchanged
        borderColor: ['#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 20, // Adds spacing inside the chart
    },
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
    elements: {
      arc: {
        borderWidth: 2,
        spacing: 5, // Adjusts spacing around slices
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
      background: 'transparent',
      margin: 'auto',
    }}>
      <div style={{ 
        width: '90%', 
        height: '100%', 
        padding: '20px',
        background: 'transparent', 
        borderRadius: '10px',
        transform: 'scale(1.25)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
