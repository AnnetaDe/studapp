'use client';
import { Chart as ChartJS } from 'chart.js';
import React from 'react';

export const DashboardChart: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const config = {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  };
  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
      }
    }
  }, [config.data]);

  return (
    <div className="bg-white col-span-3 shadow-md mx-auto p-4 md:p-8 h-screen overflow-auto">
      <h1 className="text-xl font-bold mb-4">User Performance Dashboard</h1>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
