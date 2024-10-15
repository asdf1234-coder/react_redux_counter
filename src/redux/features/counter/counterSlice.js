import { createSlice } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';

const loadState = (key, defaultValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultValue;
  }
};
const initialState = {
  counter: loadState('counter', 0),
  artisSayisi: loadState('artisSayisi', 1),
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    decrease: (state) => {
      state.counter -= 1
      localStorage.setItem('counter', state.counter);
    },
    increase: (state) => {
      state.counter += state.artisSayisi;
      localStorage.setItem('counter', state.counter);
    },
    increaseArtisSayisiCustom: (state, action) => {
      const { price, artis } = action.payload;
      if (state.counter >= price) {
        state.artisSayisi += artis;
        state.counter -= price;
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    }
  },
});

export const { decrease, increase, increaseArtisSayisiCustom } = counterSlice.actions;
export default counterSlice.reducer;