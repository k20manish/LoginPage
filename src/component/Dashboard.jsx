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
  const [activeTab, setActiveTab] = useState(tabs[0]); // Default active tab

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
        <aside className="w-1/4 bg-gray-200 p-4 rounded-xl shadow-md overflow-y-auto">
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
        <section className="flex-1 bg-gray-100 p-4 rounded-xl shadow-md flex flex-col gap-6">
          {/* Panchayat Section */}
          <div className="flex-1 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Panchayats</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {currentBlock?.panchayatName?.map((panchayat, index) => (
                <button
                  key={index}
                  onClick={() => handleWard(panchayat, index)}
                  className={`p-3 rounded-lg text-lg font-medium ${
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
          <div className="h-64 overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Wards</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {currentPanchayat &&
                currentBlock[currentPanchayat]?.map((ward, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white shadow rounded-lg text-lg w-40 text-center"
                  >
                    {ward}
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
