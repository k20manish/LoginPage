import { Pie } from "react-chartjs-2";

const PieChart = ({ cleanAreas, dirtyAreas }) => {
  const totalAreas = cleanAreas + dirtyAreas;

  const pieData = {
    datasets: [
      {
        data: [cleanAreas, dirtyAreas], // Use the props dynamically
        backgroundColor: ['rgb(166, 168, 50)', 'rgb(50, 168, 82)'], // Green for clean, red for dirty
      },
    ],
    // labels: ["Clean Areas", "Dirty Areas"], // Add labels for the chart
  };

  return (
    <div className="w-28 h-28  flex flex-col">
      <Pie data={pieData} />
      <div className="text-sm font-medium text-gray-700 flex justify-center">
        {cleanAreas}/{totalAreas}  
      </div>
   </div>
  );
};

export default PieChart;
