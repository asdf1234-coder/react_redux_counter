import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counter');
    if (serializedState === null) {
      return 0;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return 0;
  }
};

const initialState = {
  counter: loadState(),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrease: (state) => {
      state.counter -= 1;
      localStorage.setItem('counter', state.counter);
    },
    increase: (state) => {
      state.counter += 1;
      localStorage.setItem('counter', state.counter);
    },
    increaseCustom: (state, action) => {
      state.counter += action.payload;
      localStorage.setItem('counter', state.counter);
    },
    decreaseCustom: (state, action) => {
      state.counter -= action.payload;
      localStorage.setItem('counter', state.counter);
    },
  },
});

export const { decrease, increase, increaseCustom, decreaseCustom } = counterSlice.actions;
export default counterSlice.reducer;