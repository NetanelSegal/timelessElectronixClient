import React from "react";

const Icon = ({ iconName }) => {
  let className;

  if (iconName == "copy") {
    className = "fa-solid fa-copy m-1 text-gray-600";
  } else if (iconName == "delete") {
    className = "fa-solid fa-trash m-1 text-red-700";
  } else if (iconName == "edit") {
    className = "fa-solid fa-pen-to-square m-1 text-green-700";
  } else if (iconName == "search") {
    className = "fa-solid fa-magnifying-glass text-lg w-8";
  }

  return (
    <div className="p-1 text-center hover:scale-125 focus:scale-90 active:scale-90">
      <i className={className}></i>
    </div>
  );
};

export default Icon;
