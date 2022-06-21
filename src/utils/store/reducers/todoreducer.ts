import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import todoApi from "../../../services";

export interface todoState {
  todolist: Array<{ title: string; completed: boolean }>;
  loading: boolean;
  alert: boolean;
}

const initialState: todoState = {
  todolist: [],
  loading: false,
  alert: false,
};

////method with thunk
export const getTodoAsync = createAsyncThunk("todo/getlist", async () => {
  const response = await todoApi.getTodoList();
  return response;
});

export const saveTodoAsync = createAsyncThunk(
  "todo/savelist",
  async (data: todoState["todolist"]) => {
    const response = await todoApi.saveTodoList(data);
    return response;
  }
);
/////

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.todolist.push({ title: action.payload, completed: false });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.todolist.splice(action.payload, 1);
    },
    editState: (
      state,
      action: PayloadAction<{
        index: number;
        completed: boolean;
      }>
    ) => {
      state.todolist[action.payload.index].completed = action.payload.completed;
    },
    editTitle: (
      state,
      action: PayloadAction<{
        index: number;
        title: string;
      }>
    ) => {
      state.todolist[action.payload.index].title = action.payload.title;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    tosterHandle: (state) => {
      state.alert = !state.alert;
    },
    // setTodo: (state, action) => { // for without thunk method
    //   state.todolist = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodoAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      state.todolist = action.payload;
    });
    builder.addCase(saveTodoAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveTodoAsync.fulfilled, (state) => {
      state.loading = false;
      state.alert = true;
    });
  },
});

export const { add, remove, editTitle, editState, setLoading, tosterHandle } =
  todoSlice.actions;

export default todoSlice.reducer;

////method without thunk
// export const getTodoAsync = () => async (dispatch: Dispatch) => {
//   const response = await todoApi.getTodoList();
//   dispatch(setTodo(response));
// };

// export const saveTodoAsync = (data: any) => async (dispatch: Dispatch) => {
//   dispatch(setLoading());
//   await todoApi.saveTodoList(data);
//   dispatch(setLoading());
// };
