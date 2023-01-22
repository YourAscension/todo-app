import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: { search: "", isUncompleted: false },
  filteredTodos: [],
};

const filterSlice = createSlice({
  name: "filterTodo",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.filter.search = action.payload;
    },
    setIsUncompleted: (state) => {
      state.filter.isUncompleted = !state.filter.isUncompleted;
    },
    setFilteredTodo: (state, action) => {
      state.filteredTodos = action.payload;
    },
  },
});

export const { setSearch, setIsUncompleted, setFilteredTodo } = filterSlice.actions;

export default filterSlice.reducer;
