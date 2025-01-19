import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const pieData = {
    // labels: ["Clean Areas", "Dirty Areas", "Work in Progress"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: ["#4caf50", "#f44336", "#ff9800"],
      },
    ],
  };

  return (
    <div className="w-32 h-32">
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
