import React from "react";
import { goback } from "../utils/const";
interface props {
  onClick: (e: any) => void;
  type?: "primary" | "danger";
  title: string | number;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  loading?: boolean;
}
export default function Btn({
  onClick,
  type,
  title,
  className,
  style,
  disabled,
  loading,
}: props) {
  return (
    <button
      disabled={disabled ?? false}
      className={`btn btn-${type || "primary"} ${className ?? ""}`}
      onClick={onClick}
      style={{ minWidth: "70px", ...(style ?? {}) }}
    >
      {loading ? (
        <>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Loading...</span>
        </>
      ) : (
        title
      )}
    </button>
  );
}
