'use client';
import React from 'react';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, Legend, Tooltip, RadialLinearScale);

interface PolarProps {
  chartdata: any;
  polarAreaOptions?: any;
}

export const Polar: React.FC<PolarProps> = ({ chartdata, polarAreaOptions }) => {
  const defaultOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
			},
			tooltip: {
				enabled: true,
			},
		},
		scales: {
			r: {
				grid: {
					color: '#E5E7EB',
				},
				ticks: {
					display: true,
					font: {
						size: 12,
					},
					color: '#6B7280',
				},
				angleLines: {
					color: '#D1D5DB',
				},
			},
		},
	};
  return <PolarArea data={chartdata || { labels: [], datasets: [] }} />;
};
