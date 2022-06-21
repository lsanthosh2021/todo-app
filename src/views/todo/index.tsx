import React, { useState } from "react";
import style from "./index.module.css";
import SaveBtn from "../../components/savebtn";
import Container from "../../components/container";
import Btn from "../../components/btn";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../utils/store";
import {
  add,
  remove,
  editTitle,
  editState,
  getTodoAsync,
  saveTodoAsync,
} from "../../utils/store/reducers/todoreducer";
import { stateType } from "./const";
import Toster from "../../components/toster";

export default function Todo() {
  const [state, setState] = useState<stateType>({
    editText: "",
    text: "",
    editIndex: null,
  });

  const data = useSelector((state: RootState) => state.todo.todolist);
  const loading = useSelector((state: RootState) => state.todo.loading);
  const dispatch: any = useDispatch();
  const addData = (index?: number) => {
    if (index !== undefined) {
      dispatch(editTitle({ index, title: state.editText }));
      setState((prev) => ({ ...prev, editIndex: null }));
    } else {
      dispatch(add(state.text));
      setState((prev) => ({ ...prev, text: "" }));
    }
  };
  React.useEffect(() => {
    dispatch(getTodoAsync());
  }, []);

  return (
    <Container>
      <SaveBtn
        loading={loading}
        onSaveClick={() => {
          dispatch(saveTodoAsync(data));
        }}
      />
      <div className={`container d-flex flex-column ${style.todo_container}`}>
        <div className="border-bottom pb-2">
          <p className="h3">My Todo`s</p>
          <div className="d-flex gap-2 align-items-center ">
            <form
              className="w-100"
              onSubmit={(e) => {
                e.preventDefault();
                addData();
              }}
            >
              <input
                className="w-100"
                type="text"
                value={state.text}
                onChange={({ target: { value } }) => {
                  setState((prev) => ({ ...prev, text: value }));
                }}
              />
            </form>
            <Btn
              title={"Add"}
              disabled={!state.text}
              style={{ fontSize: "0.8rem" }}
              onClick={() => addData()}
            />
          </div>
        </div>
        <div className="d-flex flex-column gap-2">
          {data.map((v, index) => (
            <div
              className="d-flex justify-content-between pt-2 pb-2 align-items-center gap-2 border-bottom"
              key={index}
            >
              <input
                type={"checkbox"}
                checked={v.completed}
                onChange={({ target: { checked } }) => {
                  dispatch(editState({ index, completed: checked }));
                }}
              />
              {state.editIndex === index ? (
                <>
                  <form
                    className="w-100"
                    onSubmit={(e) => {
                      e.preventDefault();
                      addData(index);
                    }}
                  >
                    <input
                      autoFocus
                      className="w-100"
                      type="text"
                      value={state.editText}
                      onChange={({ target: { value } }) => {
                        setState((prev) => ({ ...prev, editText: value }));
                      }}
                    />
                  </form>
                </>
              ) : (
                <p
                  className="mb-0 p-1 w-100"
                  style={{ paddingLeft: "1rem", cursor: "pointer" }}
                  onClick={() => {
                    if (state.editIndex === null) {
                      setState((prev) => ({
                        ...prev,
                        editText: v.title,
                        editIndex: index,
                      }));
                    }
                  }}
                >
                  {v.title}
                </p>
              )}
              <Btn
                className="fst-italic"
                type={state.editIndex === index ? "primary" : "danger"}
                title={state.editIndex === index ? "Save" : "Remove"}
                onClick={() => {
                  if (state.editIndex === index) {
                    addData(index);
                  } else {
                    dispatch(remove(index));
                  }
                }}
                style={{
                  fontSize: "0.75rem",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <Toster />
    </Container>
  );
}
function tosterHandle(): any {
  throw new Error("Function not implemented.");
}
