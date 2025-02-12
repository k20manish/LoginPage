import React from "react";

const PhotoCounter = ({ photosClicked, onPhotoUpload }) => {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold text-[#4C585B]">Photos Clicked</h2>
      <p className="text-2xl text-[#4C585B]">{photosClicked}</p>
      <button
        onClick={onPhotoUpload}
        className="mt-2 px-4 py-2 bg-gray-300 text-[#262c2ee3] rounded-lg hover:bg-[#7e99a3] hover:text-[#e7e7e5]"
      >
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoCounter;
