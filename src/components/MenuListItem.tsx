import React from "react";
import classNames from "classnames";
import { Link } from "gatsby";

const MenuListItem: React.FC<{
    children: React.ReactNode;
    className?: string;
  }> = ({ children, className }) => {
    return (
      <li>
        <Link
          to="#"
          className={classNames(
            "flex items-center justify-center gap-2 h-full px-4 text-white text-sm",
            className
          )}
        >
          {children}
        </Link>
      </li>
    );
  };
  
  export default MenuListItem;