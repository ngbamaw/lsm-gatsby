import classNames from "classnames";
import { Link } from "gatsby";
import React from "react";

const Section: React.FC<{ src: string; color: string }> = ({ src, color }) => {
  return (
    <li className="group">
      <Link
        to="#"
        style={{ backgroundImage: `url(${src})` }}
        className={classNames(
          "flex w-28 h-16 bg-contain bg-no-repeat bg-center rounded-md transition-transform duration-200 ease-in-out group-hover:-translate-y-4",
          color
        )}
      ></Link>
    </li>
  );
};

export default Section;
