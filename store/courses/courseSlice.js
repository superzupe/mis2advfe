import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    loading: false,
    error: "",
  },

  reducers: {
    setCourses: (state, action) => {
      state.list = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error;
    },
  },
});

export const { setCourses, setLoading, setError, clearError } =
  courseSlice.actions;

  export default courseSlice.reducer
