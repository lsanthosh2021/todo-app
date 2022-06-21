import axios from "axios";
import { baseURL } from "../utils/const";
import { getLocalItems, setLocalItems } from "../utils/functions";

const getTodoList = async () => {
  try {
    const data = await axios
      .get(`${baseURL}todos/1`)
      .then((res) => getLocalItems("todo"));
    return data;
  } catch (error) {
    console.log(error);
  }
};
const saveTodoList = async (data: any) => {
  try {
    setLocalItems("todo", data);
    const res = await axios.post(`${baseURL}post`).then((res) => {
      return getLocalItems("todo");
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
const todoApi = { getTodoList, saveTodoList };
export default todoApi;
