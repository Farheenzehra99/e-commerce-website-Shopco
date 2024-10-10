import React from "react";
import s from "./SpinnerbLoader.module.css";
import cn from "clsx";

const SpinnerbLoader = ({ className }: { className?: string }) => {
  return <span className={cn(s.Loader, {}, className && className)}></span>;
};

export default SpinnerbLoader;