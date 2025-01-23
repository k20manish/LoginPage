import React, { useState } from "react";
import BlockCard from "../block/BlockCard";
import PieChart from "../block/PieChart";
import PhotoCounter from "../block/PhotoCounter";
import ChartBlock from "../block/ChartBlock";
import ChartPanch from "../block/ChartPanch";
import Slider from "react-slick";

const Dashboard = () => {
  const [currentWardIndex, setCurrentWardIndex] = useState(0);

  const [currentBlock, setCurrentBlock] = useState(BlockCard[0]);
  const [currentPanchayat, setCurrentPanchayat] = useState(
    BlockCard[0]?.panchayatName[0]
  );

  const [userName, setUserName] = useState("Ward Name");
  const [photosClicked, setPhotosClicked] = useState(0);

  const [activeBlockId, setActiveBlockId] = useState(BlockCard[0]?.id);
  const [activePanchayatIndex, setActivePanchayatIndex] = useState(0);

  const [focusedWard, setFocusedWard] = useState(null);

  const nextImage = () => {
    if (currentWardIndex < currentBlock[currentPanchayat]?.length - 1) {
      setCurrentWardIndex(currentWardIndex + 1);
      setFocusedWard(currentBlock[currentPanchayat][currentWardIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentWardIndex > 0) {
      setCurrentWardIndex(currentWardIndex - 1);
      setFocusedWard(currentBlock[currentPanchayat][currentWardIndex - 1]);
    }
  };

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
    <div className="h-screen w-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white overflow-x-auto font-sans">
      {/* Header Section */}
      <nav className="fixed top-0 left-0 right-0 bg-white text-gray-800 p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <img className="h-28 w-28" src="/profile.png" alt="" />
              <h1 className="font-bold">User Name</h1>
            </div>
            {/* Logo Section */}
            <div className="flex items-center">
              <img
                src="/swachta.png"
                alt="Logo"
                className="h-16 w-16 mr-4 rounded-full"
              />
              <h1 className="text-2xl font-bold text-blue-600">
                Saran Swachta Abhiyan
              </h1>
            </div>
          </div>

          {/* Dashboard Widgets Section */}
          <div className="flex gap-6 items-center">
            <PieChart cleanAreas={40} dirtyAreas={10} />

            <PhotoCounter
              photosClicked={photosClicked}
              setPhotosClicked={setPhotosClicked}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex mt-40 h-[calc(87vh-5rem)] overflow-y-hidden">
        {/* Block Section (Left) */}
        <aside className="w-52 bg-white p-5 rounded-xl shadow-md overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Blocks</h2>
          <div className="flex flex-col gap-3">
            {BlockCard.map((block) => (
              <button
                key={block.id}
                onClick={() => handlePanchayat(block)}
                className={`p-2 rounded-lg text-lg font-medium flex flex-col gap-2 items-center transition-all ${
                  activeBlockId === block.id
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 hover:bg-blue-50"
                }`}
              >
                <div className="App h-fit w-fit">
                  <div className="border-b border-gray-200 px-2 text-sm text-gray-500">
                    30 Visits
                  </div>
                  <div className="App h-16 w-16 mb-2 ml-4 flex justify-center mr-2">
                    <ChartBlock WardImage={55} wardWithNoImage={145} />
                  </div>
                </div>

                <div className="bg-gray-800 text-white px-2 py-1 rounded-md mt-4">
                  {block.block}
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Panchayat and Ward Section (Center - Takes Remaining Width) */}
        <section className="flex-1 bg-gray-50 p-5 rounded-xl shadow-md flex flex-col space-y-2 max-w-full max-h-screen overflow-auto">
          {/* Panchayat Section */}
          <div className="flex-2 bg-white pb-4 shadow-md rounded-xl max-h-1/2">
            <h2 className="text-2xl font-bold mb-4 pl-2 text-gray-700">
              Panchayats
            </h2>
            <div className="flex flex-wrap gap-2 justify-center max-w-full">
              {currentBlock?.panchayatName?.map((panchayat, index) => (
                <button
                  key={index}
                  onClick={() => handleWard(panchayat, index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex flex-col items-center justify-center transition-all ${
                    activePanchayatIndex === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-blue-50"
                  }`}
                >
                  <div className="App h-10 w-10 mb-2  flex justify-center">
                    <ChartPanch wardImage={5} wardithoutImage={10} />
                  </div>
                  <div className="mt-4 bg-gray-800 text-white px-2 py-1 rounded-md mb-2">
                    {panchayat}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Ward Section */}
          <div className="flex-1 max-h-screen p-4 relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Wards</h2>
            <div
              className={`flex flex-wrap gap-4 justify-center max-w-full ${
                focusedWard ? "blur-sm" : ""
              }`}
            >
              {currentPanchayat &&
              currentBlock[currentPanchayat]?.length > 0 ? (
                currentBlock[currentPanchayat]?.map((ward, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white shadow-lg rounded-lg text-center w-40 hover:scale-110 cursor-pointer"
                    onClick={() => setFocusedWard(ward)}
                  >
                    <img
                      src={ward.image}
                      alt={`Ward ${ward.name}`}
                      className="w-full h-24 object-cover rounded-t-lg mb-2"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {ward.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Ward No: {ward.wardNo}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-lg">
                  No wards available for this Panchayat.
                </p>
              )}
            </div>

            {focusedWard && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center mt-10 slider-container"
                onClick={() => setFocusedWard(null)}
              >
                <div
                  className="p-6 bg-white rounded-lg relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                    onClick={() => setFocusedWard(null)}
                  >
                    ✖
                  </button>

                  {/* Next and Previous Buttons */}
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
                    onClick={prevImage}
                    disabled={currentWardIndex === 0}
                  >
                    &lt;
                  </button>

                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full"
                    onClick={nextImage}
                    disabled={
                      currentWardIndex ===
                      currentBlock[currentPanchayat]?.length - 1
                    }
                  >
                    &gt;
                  </button>

                  {/* Image Display */}
                  <img
                    src={focusedWard.image}
                    alt={`Ward ${focusedWard.name}`}
                    className="w-96 h-64 object-cover rounded-lg mb-4"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
