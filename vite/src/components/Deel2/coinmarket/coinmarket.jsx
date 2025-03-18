import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import './coinmarket.css';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const CoinMarket = () => {
  const data = {
    labels: ['Crude Oil', 'Doge', 'Ethereum', 'Bitcoin'],
    datasets: [
      {
        label: 'Market Value ($)',
        data: [3000, 4000, 34000, 83000],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(33, 150, 243, 0.3)',
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

  const coins = [
    { name: 'Bitcoin', price: '$83,000' },
    { name: 'Ethereum', price: '$34,000' },
    { name: 'Doge', price: '$4,000' },
    { name: 'Crude Oil', price: '$3,000' },
  ];

  return (
    <div className="market-container">
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <div className="coin-list">
        {coins.map((coin, index) => (
          <div key={index} className="coin-item">
            <span>{coin.name}</span>
            <span>{coin.price}</span>
            <button className="buy-button">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinMarket;
