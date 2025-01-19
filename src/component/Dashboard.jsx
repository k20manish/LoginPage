import React, { useState } from "react";
import BlockCard from "../block/BlockCard";
 
const Dashboard = () => {
  const [currentBlock, setCurrentBlock] = useState(BlockCard[0]);
  const [currentPanchayat, setCurrentPanchayat] = useState(
    BlockCard[0]?.panchayatName[0]
  );
  const [activeBlockId, setActiveBlockId] = useState(BlockCard[0]?.id);
  const [activePanchayatIndex, setActivePanchayatIndex] = useState(0);

  const tabs = ["number1", "number2", "number3", "number4"];
  const [activeTab, setActiveTab] = useState(); // Default active tab

  const handlePanchayat = (block) => {
    setCurrentBlock(block);
    setActiveBlockId(block.id);

    // Automatically select the first panchayat
    if (block.panchayatName && block.panchayatName.length > 0) {
      setCurrentPanchayat(block.panchayatName[0]);
      setActivePanchayatIndex(0);
    } else {
      setCurrentPanchayat(null);
      setActivePanchayatIndex(null);
    }
  };

  const handleWard = (panchayat, index) => {
    setCurrentPanchayat(panchayat);
    setActivePanchayatIndex(index);
  };

  return (
    <div className="h-screen w-screen bg-slate-50">
      {/* Header Section */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-200 text-gray-800 p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/swachta.png"
              alt="Logo"
              className="h-12 w-12 mr-4 rounded-full"
            />
            <h1 className="text-2xl font-bold">Saran Swachta Abhiyan</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-6">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 hover:bg-blue-400 text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex mt-20 h-[calc(100vh-5rem)]">
        {/* Block Section (Left) */}
        <aside className="w-52 bg-gray-200 p-4 rounded-xl shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Blocks</h2>
          <div className="flex flex-col gap-3">
            {BlockCard.map((block) => (
              <button
                key={block.id}
                onClick={() => handlePanchayat(block)}
                className={`p-3 rounded-lg text-lg font-medium ${
                  activeBlockId === block.id
                    ? "bg-blue-500 text-white"
                    : "bg-white shadow hover:bg-blue-100"
                }`}
              >
                {block.block}
              </button>
            ))}
          </div>
        </aside>

        {/* Panchayat and Ward Section (Center - Takes Remaining Width) */}
        <section className="flex-1 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col space-y-4 max-w-full max-h-screen overflow-hidden">
  {/* Panchayat Section */}
  <div className="flex-2   max-h-1/2">
    <h2 className="text-xl font-bold mb-4">Panchayats</h2>
    <div className="flex flex-wrap gap-4 justify-center max-w-full">
      {currentBlock?.panchayatName?.map((panchayat, index) => (
        <button
          key={index}
          onClick={() => handleWard(panchayat, index)}
          className={`p-1 rounded-lg text-sm font-medium ${
            activePanchayatIndex === index
              ? "bg-blue-500 text-white"
              : "bg-white shadow hover:bg-blue-100"
          }`}
        >
          {panchayat}
        </button>
      ))}
    </div>
  </div>

 {/* Ward Section */}
<div className="flex-1 max-h-screen  o p-4">
  <h2 className="text-2xl font-bold mb-4 text-center">Wards</h2>
  <div className="flex flex-wrap gap-4 justify-center max-w-full">
    {currentPanchayat && currentBlock[currentPanchayat]?.length > 0 ? (
      currentBlock[currentPanchayat]?.map((ward, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-lg rounded-lg text-center w-40"
        >
          <img
            src={ward.image}
            alt={`Ward ${ward.name}`}
            className="w-full h-24 object-cover rounded-t-lg mb-2"
          />
          <h3 className="text-lg font-semibold">{ward.name}</h3>
          <p className="text-sm text-gray-500">Ward No: {ward.wardNo}</p>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-lg">No wards available for this Panchayat.</p>
    )}
  </div>
</div>

</section>

      </div>
    </div>
  );
};

export default Dashboard;