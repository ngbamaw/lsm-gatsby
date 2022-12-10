import { Transition } from "@headlessui/react";
import React from "react";
import { executeWithResult } from "../utils";

const Slideshow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [active, setActive] = React.useState(0);
  const count = React.Children.count(children);
  console.log(Array(count).map((_, index) => index));

  return (
    <div className="relative overflow-hidden h-full w-screen">
      <ul
        style={{
          transform: `translateX(${-100 * active}%)`,
        }}
        className="flex w-screen h-full transition-transform duration-500 ease-in-out"
      >
        {children}
      </ul>
      <div className="absolute bottom-6 left-0 right-0 w-fit flex gap-2 mx-auto">
        {executeWithResult(count, (index) => (
          <button
            onClick={() => setActive(index)}
            className="h-1 w-8 bg-opacity-30 bg-slate-500"
          >
            <Transition
              show={index <= active}
              className="h-1 w-full bg-yellow-400"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
