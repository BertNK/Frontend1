import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import './saldo.css'

export default function BasicPie() {
  const [dimensions, setDimensions] = useState({ width: 400, height: 200 });

  useEffect(() => {
    const updateSize = () => {
      const parent = document.getElementById('pie-chart-container');
      if (parent) {
        setDimensions({
          width: parent.clientWidth * 0.95,
          height: parent.clientHeight * 0.95,
        });
      }
    };

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div id="pie-chart-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PieChart
        series={[{
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        }]}
        width={dimensions.width}
        height={dimensions.height}
        sx={{ backgroundColor: 'transparent', color: 'white', '& .MuiChartsLegend-root': { color: 'white' }, '& .MuiChartsAxis-tickLabel': { fill: 'white' } }}
      />
    </div>
  );
}
