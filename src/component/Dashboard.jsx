import React from "react";
import { useState } from "react";
import BlockCard from "../block/BlockCard";
// import { data } from "react-router-dom";

const Dashboard = () => {
   
  const [currentblock, setcurrentblock] = useState(BlockCard[0]);
  const [currentPnachayat,setCurrentPanchayat] = useState(BlockCard[0]?.panchayatName[0]);

  const [activeTab, setActiveTab] = useState("number1"); // Default active tab

  const tabs = ["number1", "number2", "number3", "number4"];
  

  const handlePanchayat = (data) => {
    setcurrentblock(data);
    console.log(currentblock);
  };

  const handleWard = (punch) =>{
   setCurrentPanchayat(punch);
   console.log(currentPnachayat);
  }


  return (
    <div className="h-screen w-screen bg-white">
      {/* Header section */}
      <div className="h-1/5 flex justify-between items-center">
        <div className="flex justify-center items-center">
          <p className="text-3xl font-semibold ml-10">
            Welcom <p className="font-normal text-xl">To,Saran Swachta Abhiyan</p>
            {/* <p className="font-normal text-2xl"></p> */}
          </p>
          <img className="h-24 w-24 mx-10 mt-2" src="/swachta.png" alt="" />
        </div>

        {/* <div className="flex gap-5 justify-center items-center mr-10">
          <h1 className="bg-gray-100 px-2 py-1 rounded-xl flex justify-center items-center hover:bg-gray-400 hover:text-white cursor-pointer drop-shadow-md">number1</h1>
          <h1 className="bg-gray-100 px-2 py-1 rounded-xl flex justify-center items-center hover:bg-gray-400 hover:text-white cursor-pointer drop-shadow-md">number2</h1>
          <h1 className="bg-gray-100 px-2 py-1 rounded-xl flex justify-center items-center hover:bg-gray-400 hover:text-white cursor-pointer drop-shadow-md">number3</h1>
          <h1 className="bg-gray-100 px-2 py-1 rounded-xl flex justify-center items-center hover:bg-gray-400 hover:text-white cursor-pointer drop-shadow-md">number4</h1>
        </div> */}
          

          <div className="flex gap-5 justify-center items-center mr-10">
      {tabs.map((tab) => (
        <h1
          key={tab}
          onClick={() => setActiveTab(tab)} // Set the active tab on click
          className={`px-2 py-1 rounded-xl flex justify-center items-center cursor-pointer drop-shadow-md
            ${
              activeTab === tab
                ? "bg-gray-400 text-white" // Active tab styles
                : "bg-gray-100 hover:bg-gray-400 hover:text-white" // Inactive tab styles
            }`}
        >
          {tab}
        </h1>
      ))}
    </div>
      </div>
  
  {/* Block section */}
      <div className="grid grid-cols-12 h-4/5 gap-2 ">
        <div className="  h-[500px] rounded-xl border-2 border-gray-300 col-span-3 gap-2 flex flex-wrap justify-center overflow-y-scroll m-1">
          {BlockCard.map((data) => (
            <p
              className="bg-gray-200 h-24 w-24 rounded-lg cursor-pointer mt-1 mb-1 hover:bg-gray-400  hover:text-white flex justify-center items-center drop-shadow-md"
              key={data.id}
              onClick={() => handlePanchayat(data)}
            >
              {data.block}
            </p>
          ))}
        </div>

{/* panchayat section */}
        <div className="grid col-span-9   h-full">
          <div className="  h-64">
               {currentblock && currentblock.panchayatName && (
               <div className=" rounded-xl border-2 border-gray-300 h-60 col-span-3 gap-2 flex flex-wrap justify-center  overflow-y-scroll mt-1">
                  {currentblock.panchayatName.map((punch, index) => (
                     <p
                     className="bg-gray-200 h-24 w-24 rounded-lg cursor-pointer mt-3 mb-1 hover:bg-gray-400 hover:text-white flex justify-center items-center drop-shadow-md"
                     key={index}
                     onClick={() =>handleWard(punch)} >
                     {punch}
                     </p>
                  ))}
               </div>
               )}
          </div>
 
 {/* ward section */}
          <div className="   h-60">
            {currentPnachayat && currentblock[currentPnachayat] && (
               <div className="rounded-xl border-2 border-gray-300  h-60 col-span-3 gap-2 flex flex-wrap justify-center  overflow-y-scroll ">
                  {currentblock[currentPnachayat].map((data, index) => (
                     <p
                     className="bg-gray-200 h-24 w-24 rounded-lg cursor-pointer mt-1 mb-1 hover:bg-gray-400 hover:text-white flex justify-center items-center drop-shadow-md"
                     key={index}
                     >
                     {data}
                     </p>
                  ))}
               </div>
               )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
