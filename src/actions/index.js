export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text) => ({
  type: "ADD_TODO",
  text: "Build a To-Do app using Redux",
});

export const toggleTodo = (index) => ({
  type: "TOGGLE_TODO",
  index,
});

export const updateTodo = (text, index) => ({
  type: "UPDATE_TODO",
  text,
  index,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});
