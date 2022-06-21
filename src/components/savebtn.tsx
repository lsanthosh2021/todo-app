import React from "react";
import { goback } from "../utils/const";
import Btn from "./btn";

export default function SaveBtn({
  onSaveClick,
  loading,
}: {
  onSaveClick: (e: any) => void;
  loading?: boolean;
}) {
  return (
    <div className="d-flex gap-2 justify-content-end p-2">
      <Btn
        type="primary"
        onClick={onSaveClick}
        title="Save"
        loading={loading}
      />
      <Btn type="danger" onClick={goback} title="Cancel" />
    </div>
  );
}
