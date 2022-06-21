import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  alignCenter?: boolean;
}

export default function Container({ children, alignCenter }: props) {
  return (
    <div
      className={`d-flex flex-column border h-100 ${
        alignCenter ? "align-items-center" : ""
      }`}
    >
      {children}
    </div>
  );
}
