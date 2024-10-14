import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decrease, increase, increaseArtisSayisi1, increaseArtisSayisi2, increaseArtisSayisi3, increaseArtisSayisi4, increaseArtisSayisi5, increaseArtisSayisi6, increaseArtisSayisi7, increaseArtisSayisi8, increaseArtisSayisi9, increaseArtisSayisi10, increaseArtisSayisi11, increaseArtisSayisi12, increaseArtisSayisi13, increaseArtisSayisi14 } from "./redux/features/counter/counterSlice";
function App() {
  const dispatch = useDispatch();
  const {counter} = useSelector(state => state.counter)
  const notify = (iktar) => {
    toast(`yetersiz para gereken para: ${iktar - counter}`, {
      style: {
        backgroundColor: '#387478', // Arka plan rengi
        color: '#E2F1E7', // Yazı rengi
        width: '100%',
        height: '100%',
        zIndex: '111100000000000',
      },
      progressStyle: {
        visibility: 'hidden',
        height: '0px', // Progres bar yüksekliği
      },
      autoClose: 2500,
    });
  }
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
  return (
    <div className="App">
      <span onClick = {() => dispatch(decrease())} className="pointer user-select artır-btn btn"> - </span>
      <div className='toplanma'>
        <div className='dik dik2'>
          <div className='store1 store'>
            <ul>
              <li className='li' onClick = {() => { counter > 50? dispatch(increaseArtisSayisi1()) : notify(50)}} style={{ backgroundColor: counter >= 50 ? '#43958C' : ''}}>
                <ToastContainer />
                <div className='isimcontainer'>
                  <div className='isim'>POOR</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 50</div>
                    <div className='artis'>Click: +1</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 100? dispatch(increaseArtisSayisi2()) : notify(100)}} style={{ backgroundColor: counter >= 100 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>LOW-INCOME</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 100</div>
                    <div className='artis'>Click: +2</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 500? dispatch(increaseArtisSayisi3()) : notify(500)}} style={{ backgroundColor: counter >= 500 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>WORKING CLASS</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 500</div>
                    <div className='artis'>Click: +12</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 2000? dispatch(increaseArtisSayisi4()) : notify(2000)}} style={{ backgroundColor: counter >= 2000 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>BLUE COLLAR</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 2.000</div>
                    <div className='artis'>Click: +50</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 5000? dispatch(increaseArtisSayisi5()) : notify(5000)}} style={{ backgroundColor: counter >= 5000 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>WHITE COLLAR</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 5.000</div>
                    <div className='artis'>Click: +150</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 20000? dispatch(increaseArtisSayisi6()) : notify(20000)}} style={{ backgroundColor: counter >= 20000 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>MINIMUM WAGE</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 20.000</div>
                    <div className='artis'>Click: +600</div>
                  </div>
                </div>
              </li>
              <li>
                <hr />
              </li>
              <li className='li' onClick = {() => { counter > 50000? dispatch(increaseArtisSayisi7()) : notify(50000)}} style={{ backgroundColor: counter >= 50000 ? '#43958C' : ''}}>
                <div className='isimcontainer'>
                  <div className='isim'>STRUGGLING CLASS</div>
                  <div className='pricecontainer'>
                    <div className='price'>Price: 50.000</div>
                    <div className='artis'>Click: +1.500</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='counter_container'>
          <span className="user-select counter">{formatNumber(counter)}</span>
          <span className="user-select artissayi">Click: {formatNumber(localStorage.getItem('artisSayisi'))}</span>
        </div>
        <div className='dik dik1'>
            <div className='store2 store'>
              <ul>
                <li className='li' onClick = {() => { counter > 200000? dispatch(increaseArtisSayisi8()) : notify(200000)}} style={{ backgroundColor: counter >= 200000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>LOWER MIDDLE</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 200.000</div>
                      <div className='artis'>Click: +7.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 500000? dispatch(increaseArtisSayisi9()) : notify(500000)}} style={{ backgroundColor: counter >= 500000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>UPPER MIDDLE</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 500.000</div>
                      <div className='artis'>Click: +20.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 3000000? dispatch(increaseArtisSayisi10()) : notify(3000000)}} style={{ backgroundColor: counter >= 3000000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>SMALL BIZ</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 3.000.000</div>
                      <div className='artis'>Click: +130.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 10000000? dispatch(increaseArtisSayisi11()) : notify(10000000)}} style={{ backgroundColor: counter >= 10000000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>INVESTOR</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 10.000.000</div>
                      <div className='artis'>Click: +420.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 50000000? dispatch(increaseArtisSayisi12()) : notify(50000000)}} style={{ backgroundColor: counter >= 50000000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>ENTREPRENEUR</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 50.000.000</div>
                      <div className='artis'>Click: +2.220.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 300000000? dispatch(increaseArtisSayisi13()) : notify(300000000)}} style={{ backgroundColor: counter >= 300000000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>CORPORATE</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 300.000.000</div>
                      <div className='artis'>Click: +13.000.000</div>
                    </div>
                  </div>
                </li>
                <li>
                  <hr />
                </li>
                <li className='li' onClick = {() => { counter > 1000000000? dispatch(increaseArtisSayisi14()) : notify(1000000000)}} style={{ backgroundColor: counter >= 1000000000 ? '#43958C' : ''}}>
                  <div className='isimcontainer'>
                    <div className='isim'>ULTRA RICH</div>
                    <div className='pricecontainer'>
                      <div className='price'>Price: 1.000.000.000</div>
                      <div className='artis'>Click: +50.000.000</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <span onClick = {() => dispatch(increase())} className="pointer user-select btn eksil-btn"> + </span>
    </div>
  );
}

export default App;
