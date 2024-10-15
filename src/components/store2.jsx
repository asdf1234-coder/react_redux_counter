import React from 'react'
import '../index.css'
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { increaseArtisSayisiCustom } from "../redux/features/counter/counterSlice";

const Store2 = () => {
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
      },
      progressStyle: {
        visibility: 'hidden',
        height: '0px',
      },
      autoClose: 2500,
    });
  }

  return (
    <div className='store2 store'>
        <ToastContainer />
        <ul>
            <li className='li' onClick = {() => { counter >= 200000? dispatch(increaseArtisSayisiCustom({ price: 200000, artis: 7000 })) : notify(200000)}} style={{ backgroundColor: counter >= 200000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 500000? dispatch(increaseArtisSayisiCustom({ price: 500000, artis: 20000 })) : notify(500000)}} style={{ backgroundColor: counter >= 500000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 3000000? dispatch(increaseArtisSayisiCustom({ price: 3000000, artis: 130000 })) : notify(3000000)}} style={{ backgroundColor: counter >= 3000000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 10000000? dispatch(increaseArtisSayisiCustom({ price: 10000000, artis: 420000 })) : notify(10000000)}} style={{ backgroundColor: counter >= 10000000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 50000000? dispatch(increaseArtisSayisiCustom({ price: 50000000, artis: 2220000 })) : notify(50000000)}} style={{ backgroundColor: counter >= 50000000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 300000000? dispatch(increaseArtisSayisiCustom({ price: 300000000, artis: 13000000 })) : notify(300000000)}} style={{ backgroundColor: counter >= 300000000 ? '#43958C' : ''}}>
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
            <li className='li' onClick = {() => { counter >= 1000000000? dispatch(increaseArtisSayisiCustom({ price: 1000000000, artis: 50000000 })) : notify(1000000000)}} style={{ backgroundColor: counter >= 1000000000 ? '#43958C' : ''}}>
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
  )
}

export default Store2;