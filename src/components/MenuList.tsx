import classNames from "classnames";
import React from "react";

const MenuList: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <ul className={classNames("flex h-full", className)}>{children}</ul>;
};

export default MenuList;
