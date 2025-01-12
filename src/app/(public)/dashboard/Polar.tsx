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
  return <PolarArea data={chartdata || { labels: [], datasets: [] }} />;
};
