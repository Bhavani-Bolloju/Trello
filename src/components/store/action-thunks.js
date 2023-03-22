import { addFetchData } from "./AllTasksSlice";

//sending cart data
export const sendTodos = function (todoItems) {
  return async function () {
    const sendCart = async function () {
      const res = await fetch(
        "https://signin-276b8-default-rtdb.firebaseio.com/todos.json",
        {
          method: "PUT",
          body: JSON.stringify({
            todoItems,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
    };

    sendCart();
  };
};

//fetching cart data

export const fetchTodosData = function () {
  return async function (dispatch) {
    const fetchTodos = async function () {
      const res = await fetch(
        "https://signin-276b8-default-rtdb.firebaseio.com/todos.json"
      );

      if (!res.ok) {
        throw new Error("failed to fetch data");
      }

      const resData = await res.json();

      dispatch(addFetchData(resData.todoItems));
    };

    fetchTodos();
  };
};
