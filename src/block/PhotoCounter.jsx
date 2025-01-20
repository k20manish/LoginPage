import React from "react";

const PhotoCounter = ({ photosClicked, onPhotoUpload }) => {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold">Photos Clicked</h2>
      <p className="text-2xl">{photosClicked}</p>
      <button
        onClick={onPhotoUpload}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoCounter;
