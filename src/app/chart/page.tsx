'use client';

import React, { useEffect } from 'react';
import axios from 'axios';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

export default function Page() {
  useEffect(() => {
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    if (!context) {
      console.error('Context not found');
      return;
    }

    const createLineChart = (xData: string[], yData: number[]) => {
      const data = {
        labels: xData,
        datasets: [{
          label: 'Aluminum Prices',
          data: yData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          pointStyle: false,
          borderWidth: 1,
          
        }]
      };

      const config: any = {
        type: 'line',
        data: data,
      };

      new ChartJS(context, config);
    };

    axios.get('https://www.alphavantage.co/query?function=ALUMINUM&interval=monthly&apikey=demo')
      .then((response) => {
        const data = response.data.data;
        const xData: string[] = [];
        const yData: number[] = [];
        for (let i = data.length - 1; i > 0; i--) {
          if(data[i].value !== '.') {

          
          xData.push(data[i].date);
          yData.push(data[i].value);
          }
        }
        createLineChart(xData, yData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='w-[1200px]'>
      <canvas></canvas>
    </div>
  );
}
