import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increaseCustom, decreaseCustom } from "./redux/features/counter/counterSlice";
import { useEffect } from 'react';
import { getCountry } from "./redux/features/country/countrySlice";
function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counter)
  const {country} = useSelector(state => state.country)
  console.log(country)
  useEffect(() => {
    dispatch(getCountry())
  }, [dispatch])
  const handleCustomIncrease = () => {
    const customValue = document.querySelector("#deger").value;
    dispatch(increaseCustom(Number(customValue)));
  }
  const handleCustomDecrease = () => {
    const customValue = document.querySelector("#deger2").value;
    dispatch(decreaseCustom(Number(customValue)));
  }
  const formatNumber = (num) => {
    const isNegative = num < 0;
    const absoluteNum = Math.abs(num);
  
    let formattedNumber;
  
    if (absoluteNum >= 1e15) formattedNumber = (absoluteNum / 1e15).toFixed(1) + ' kat.';
    else if (absoluteNum >= 1e12) formattedNumber = (absoluteNum / 1e12).toFixed(1) + ' trilyon';
    else if (absoluteNum >= 1e9) formattedNumber = (absoluteNum / 1e9).toFixed(1) + ' milyar';
    else if (absoluteNum >= 1e6) formattedNumber = (absoluteNum / 1e6).toFixed(1) + ' milyon';
    else formattedNumber = absoluteNum.toString();

    return isNegative ? `-${formattedNumber}` : formattedNumber;
  };
  return (
    <div className="App">
      <span onClick = {() => dispatch(decrease())} className="pointer user-select artır-btn btn"> - </span>
      <div className='toplanma'>
        <div className='dik dik2'>
          <input type="text" id="deger2" className='inputeksi input'/>
          <span onClick = {handleCustomDecrease} className="pointer user-select btn btn-custom">custom değer eksilt</span>
        </div>
        <span className="user-select counter">{formatNumber(counter)}</span>
        <div className='dik dik1'>
          <input type="text" id="deger" className='inputartı input'/>
          <span onClick = {handleCustomIncrease} className="pointer user-select btn btn-custom">custom değer artır</span>
        </div>
      </div>
      <span onClick = {() => dispatch(increase())} className="pointer user-select btn eksil-btn"> + </span>
    </div>
  );
}

export default App;
