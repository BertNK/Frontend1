import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import './coinmarket.css';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const CoinMarket = () => {
  const [prices, setPrices] = useState({ Bitcoin: 0, Ethereum: 0, Doge: 0, Litecoin: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const bitcoinResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
        const bitcoinData = await bitcoinResponse.json();
        
        const ethereumResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const ethereumData = await ethereumResponse.json();

        const dogeResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
        const dogeData = await dogeResponse.json();

        const litecoinResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd');
        const litecoinData = await litecoinResponse.json();

        setPrices({
          Bitcoin: bitcoinData.bpi.USD.rate_float || 0,
          Ethereum: ethereumData.ethereum.usd || 0,
          Doge: dogeData.dogecoin.usd || 0,
          Litecoin: litecoinData.litecoin.usd || 0,
        });

        setLoading(false);
      } catch (error) {
        console.error('Error fetching market data:', error);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  const data = {
    labels: ['Litecoin', 'Doge', 'Ethereum', 'Bitcoin'],
    datasets: [
      {
        label: 'Market Value ($)',
        data: [prices.Litecoin, prices.Doge, prices.Ethereum, prices.Bitcoin],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(33, 150, 243, 0.3)',
        borderWidth: 3,
        pointBackgroundColor: '#2196F3',
        pointBorderColor: '#2196F3',
        pointRadius: 6,
      },
    ],
  };

  return (
    <div className="market-container">
      {loading ? (
        <p>Loading market data...</p>
      ) : (
        <>
          <div className="chart-container">
            <Line data={data} />
          </div>
          <div className="coin-list">
            {Object.entries(prices).map(([name, price]) => (
              <div key={name} className="coin-item">
                <span>{name}</span>
                <span>${price.toLocaleString()}</span>
                <button className="buy-button">Buy</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CoinMarket;
