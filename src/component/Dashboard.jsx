import React from "react";
import { useState } from "react";
import BlockCard from "../block/BlockCard";
// import { data } from "react-router-dom";

const Dashboard = () => {
   
  let [currentblock, setcurrentblock] = useState(BlockCard[0]);
  let [currentPnachayat,setCurrentPanchayat] = useState(BlockCard[0]?.panchayatName[0]);

  const [activeTab, setActiveTab] = useState(); // Default active tab
  const [activeBlocks, setActiveBlocks] = useState([]);
  const [activePanchayat,setActivePanchayat] = useState([]);

  const tabs = ["number1", "number2", "number3", "number4"];
  
    

  const handlePanchayat = (data) => {
   
    setcurrentblock(data);
    console.log(currentblock);
     // Toggle active state for the clicked block
     setActiveBlocks(data.id);
  };

  const handleWard = (punch,index) =>{
    setCurrentPanchayat(punch);
   setActivePanchayat(index)
  
  //  console.log(currentPnachayat);
  }


  return (
    <div className="h-screen w-screen bg-slate-50">
      {/* Header section */}
      <div className="h-1/5 flex justify-between items-center border-2 border-white mx-2 bg-gray-100 rounded-xl">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold ml-10">
            Welcom <h1 className="font-normal text-xl">To,Saran Swachta Abhiyan</h1>
            {/* <p className="font-normal text-2xl"></p> */}
          </h1>
          <img className="h-24 w-24 mx-10 mt-2" src="/swachta.png" alt="" />
        </div>
          <div className="flex gap-5 justify-center items-center mr-10">
      {tabs.map((tab) => (
        <h1
          key={tab}
          onClick={() => setActiveTab(tab)} // Set the active tab on click
          className={`px-2 py-1 rounded-xl flex justify-center items-center cursor-pointer drop-shadow-md
            ${
              activeTab === tab
                ? "bg-gray-400 text-white hover:px-3 hover:py-2" // Active tab styles
                : "bg-gray-100 hover:bg-gray-400 hover:text-white hover:py-2 hover:px-3" // Inactive tab styles
            }`}
        >
          {tab}
        </h1>
      ))}
    </div>
      </div>
  
  {/* Block section */}
      <div className="grid grid-cols-12 h-fit gap-2 ">
        <div className="bg-zinc-400  h-[500px] rounded-xl border-2 border-gray-300 col-span-3 gap-2 flex flex-wrap justify-center overflow-y-scroll m-1">
          {BlockCard.map((data,id) => (
            <p
               key={id}
              className={`bg-gray-100 h-24 w-24 rounded-lg cursor-pointer mt-1 mb-1  hover:text-black   flex justify-center items-center drop-shadow-md ${activeBlocks === data.id
                ? "bg-gray-400 text-white  "
                : "bg-gray-200 hover:bg-gray-400  hover:text-white   "
              }`}
              
              onClick={() => handlePanchayat(data)}
            >
              {data.block}
            </p>
          ))}
        </div>

{/* panchayat section */}
        <div className="grid col-span-9 bg-zinc-200 rounded-lg  h-full">
          <div className="  h-64">
               {currentblock && currentblock.panchayatName && (
               <div className="bg-zinc-400 mx-5 rounded-xl border-2 border-gray-300 h-60 col-span-3 gap-2 flex flex-wrap justify-center  overflow-y-scroll mt-1">
                  {currentblock.panchayatName.map((punch, index) => (
                     <p
                      key={index}
                      className={`bg-gray-200 h-24 w-24 rounded-lg cursor-pointer mt-3 mb-1 hover:bg-gray-400 hover:text-white flex justify-center items-center drop-shadow-md ${  (activePanchayat === index) 
                        ?  "bg-gray-500 text-white" 
                        : "bg-gray-200 hover:bg-gray-400 hover:text-white"
                      }`}
                     onClick={() =>handleWard(punch,index)} >
                     {punch}
                     </p>
                  ))}
               </div>
               )}
          </div>
 
 {/* ward section */}
          <div className="   h-60">
            {currentPnachayat && currentblock[currentPnachayat] &&  (
               <div className="bg-zinc-400 mx-5 rounded-xl border-2 border-gray-300  h-60 col-span-3 gap-2 flex flex-wrap justify-center  overflow-y-scroll ">
                  {currentblock[currentPnachayat].map((data, index) => (
                     <p
                     className="bg-gray-200 h-24 w-24 rounded-lg cursor-pointer my-2 hover:bg-gray-400 hover:text-white flex justify-center items-center drop-shadow-md"
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
