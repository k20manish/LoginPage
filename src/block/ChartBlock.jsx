import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ChartBlock = ({ WardImage, wardWithNoImage }) => {
  const totalwardNo = WardImage + wardWithNoImage;
  const data = {
  
    datasets: [
      {  
        data: [WardImage, wardWithNoImage], // Data for the pie slices
        backgroundColor: ['rgb(166, 168, 50)' , 'rgb(50, 168, 82)'],
        hoverOffset: 4,
        cutout: "40%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div>
       
      <Pie data={data} options={options} />
      <div>
        {WardImage}/{totalwardNo}
      </div>
    </div>
  );
};

export default ChartBlock;
