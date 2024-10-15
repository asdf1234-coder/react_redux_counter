import './index.css';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store1 from './components/store1'
import Store2 from './components/store2'
import { decrease, increase } from "./redux/features/counter/counterSlice";
function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counter)
  const formatNumber = (num) => {
    const isNegative = num < 0;
    const absoluteNum = Math.abs(num);
  
    let formattedNumber;
  
    if (absoluteNum >= 1e15) formattedNumber = (absoluteNum / 1e15).toFixed(1) + ' kat.';
    else if (absoluteNum >= 1e12) formattedNumber = (absoluteNum / 1e12).toFixed(1) + ' tri.';
    else if (absoluteNum >= 1e9) formattedNumber = (absoluteNum / 1e9).toFixed(1) + ' bil.';
    else if (absoluteNum >= 1e6) formattedNumber = (absoluteNum / 1e6).toFixed(1) + ' mil.';
    else if (absoluteNum >= 1e3) formattedNumber = (absoluteNum / 1e3).toFixed(1) + ' k.';
    else formattedNumber = absoluteNum.toString();

    return isNegative ? `-${formattedNumber}` : formattedNumber;
  };
  const handleIncrease = () => {
    toast.dismiss();
    dispatch(increase());
  };
  return (
    <div className="App">
      <ToastContainer />
      <div className='toplanma'>
        <div className='dik dik2'>
          <Store1 />
        </div>
        <div className='counter_container'>
          <span onClick = {() => dispatch(decrease())} className="pointer user-select artır-btn btn"> - </span>
          <span className="user-select counter">{formatNumber(counter)}</span>
          <span className="user-select artissayi">Click: {formatNumber(localStorage.getItem('artisSayisi'))}</span>
          <span onClick = {handleIncrease} className="pointer user-select btn eksil-btn"> + </span>
        </div>
        <div className='dik dik1'>
          <Store2 />
        </div>
      </div>
    </div>
  );
}

export default App;
