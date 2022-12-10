import React from "react";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="bg-slate-700 text-sm text-white font-semibold flex gap-2 uppercase py-3 px-4 items-center">
      {children}
    </button>
  );
};

export default Button;
