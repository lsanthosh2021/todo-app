import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import { tosterHandle } from "../utils/store/reducers/todoreducer";
import "./index.css";
export default function Toster() {
  const toster = useSelector((state: RootState) => state.todo.alert);
  const dispatch = useDispatch();
  React.useEffect(() => {
    toster &&
      setTimeout(() => {
        dispatch(tosterHandle());
      }, 2000);
  }, [toster]);

  return (
    <>
      <div
        className={`alert position-fixed ${toster ? "fadein" : "fadeout"}`}
        style={{
          bottom: 0,
          backgroundColor: "green",
          color: "#fff",
          transition: "All 0.3s ease-in-out",
        }}
        role="alert"
      >
        Saved Successfully.
      </div>
    </>
  );
}
