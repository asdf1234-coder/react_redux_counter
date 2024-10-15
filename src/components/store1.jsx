import React from 'react'
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { increaseArtisSayisiCustom } from "../redux/features/counter/counterSlice";

const Store1 = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter);

  const notify = (iktar) => {
    toast.dismiss();
    toast(`Yetersiz para. Gereken para: ${iktar - counter}`, {
      style: {
        backgroundColor: '#387478',
        color: '#E2F1E7',
        width: '100%',
        height: '100%',
        zIndex: '111100000000000',
        userSelect: 'none',
      },
      progressStyle: {
        visibility: 'hidden',
        height: '0px',
      },
      autoClose: 2500,
    });
  }

  return (
    <div className='store1 store'>
        <ToastContainer />
        <ul>
            <li className='li' onClick = {() => { counter >= 50? dispatch(increaseArtisSayisiCustom({ price: 50, artis: 1 })) : notify(50)}} style={{ backgroundColor: counter >= 50 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 100? dispatch(increaseArtisSayisiCustom({ price: 100, artis: 2 })) : notify(100)}} style={{ backgroundColor: counter >= 100 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 500? dispatch(increaseArtisSayisiCustom({ price: 500, artis: 12 })) : notify(500)}} style={{ backgroundColor: counter >= 500 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 2000? dispatch(increaseArtisSayisiCustom({ price: 2000, artis: 50 })) : notify(2000)}} style={{ backgroundColor: counter >= 2000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 5000? dispatch(increaseArtisSayisiCustom({ price: 5000, artis: 150 })) : notify(5000)}} style={{ backgroundColor: counter >= 5000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 20000? dispatch(increaseArtisSayisiCustom({ price: 20000, artis: 600 })) : notify(20000)}} style={{ backgroundColor: counter >= 20000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 50000? dispatch(increaseArtisSayisiCustom({ price: 50000, artis: 1500 })) : notify(50000)}} style={{ backgroundColor: counter >= 50000 ? '#43958C' : ''}}>
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
  )
}

export default Store1;