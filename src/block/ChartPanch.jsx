import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const ChartPanch = ({wardImage,wardithoutImage}) => {
    const totalward = wardImage + wardithoutImage;
    
  const data = {
     
    datasets: [
      {
       
        data: [wardImage,wardithoutImage], // Data for the pie slices
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
       
      <Pie data={data}  />
      <div>
        {wardImage}/{totalward}
      </div>
    </div>
  );
};

export default ChartPanch;
