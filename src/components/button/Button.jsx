import React from "react";

const Button = ({ text, secondery, onClick }) => {
  const clr = secondery ? "bg-gray-500" : "bg-green-600";
  const clrHover = secondery ? "bg-gray-600" : "bg-green-700";

  return (
    <button
      onClick={onClick}
      className={`rounded-xl ${clr} px-5 py-2 text-white hover:scale-105 hover:${clrHover} active:scale-95`}
    >
      {text || "Button default"}
    </button>
  );
};

export default Button;
