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
    increaseCustom: (state, action) => {
      state.counter += action.payload;
      localStorage.setItem('counter', state.counter);
    },
    decreaseCustom: (state, action) => {
      state.counter -= action.payload;
      localStorage.setItem('counter', state.counter);
    },
    increaseArtisSayisi1: (state) => {
      if(state.counter >= 50){
        state.artisSayisi += 1
        state.counter -= 50
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi2: (state) => {
      if(state.counter >= 100){
        state.artisSayisi += 2
        state.counter -= 100
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi3: (state) => {
      if(state.counter >= 500){
        state.artisSayisi += 12
        state.counter -= 500
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi4: (state) => {
      if(state.counter >= 2000){
        state.artisSayisi += 50
        state.counter -= 2000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi5: (state) => {
      if(state.counter >= 5000){
        state.artisSayisi += 150
        state.counter -= 5000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi6: (state) => {
      if(state.counter >= 20000){
        state.artisSayisi += 600
        state.counter -= 20000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi7: (state) => {
      if(state.counter >= 50000){
        state.artisSayisi += 1500
        state.counter -= 50000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi8: (state) => {
      if(state.counter >= 200000){
        state.artisSayisi += 7000
        state.counter -= 200000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi9: (state) => {
      if(state.counter >= 500000){
        state.artisSayisi += 20000
        state.counter -= 500000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi10: (state) => {
      if(state.counter >= 3000000){
        state.artisSayisi += 130000
        state.counter -= 3000000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi11: (state) => {
      if(state.counter >= 10000000){
        state.artisSayisi += 420000
        state.counter -= 10000000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi12: (state) => {
      if(state.counter >= 50000000){
        state.artisSayisi += 2220000
        state.counter -= 50000000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi13: (state) => {
      if(state.counter >= 300000000){
        state.artisSayisi += 13000000
        state.counter -= 300000000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
    increaseArtisSayisi14: (state) => {
      if(state.counter >= 1000000000){
        state.artisSayisi += 50000000
        state.counter -= 1000000000
        localStorage.setItem('counter', state.counter);
        localStorage.setItem('artisSayisi', state.artisSayisi);
      }
    },
  },
});

export const { decrease, increase, increaseCustom, decreaseCustom, increaseArtisSayisi1, increaseArtisSayisi2, increaseArtisSayisi3, increaseArtisSayisi4, increaseArtisSayisi5, increaseArtisSayisi6, increaseArtisSayisi7, increaseArtisSayisi8, increaseArtisSayisi9, increaseArtisSayisi10, increaseArtisSayisi11, increaseArtisSayisi12, increaseArtisSayisi13, increaseArtisSayisi14 } = counterSlice.actions;
export default counterSlice.reducer;