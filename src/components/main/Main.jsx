import React from 'react'
import { inc } from '../../context/counterSlice'
import { useDispatch } from 'react-redux'
import "./Main.css"
import MainImg from '../../../public/01.png'

const Main = () => {
    // HOC
    let dispatch = useDispatch()
  return (
    <div>
        <div className='main__planet'>
          <div className='planet__text'>
            <h3>Welcome to GreenShop</h3>
            <h1>Let’s Make a Better 
              <span style={{color:"green"}}> Planet</span>
              </h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. Use <br /> our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <button className='nav_btn'>SHOP NOW</button>
          </div>
          <div className='planet__img'>
            <div>
              <img src={MainImg} alt="" />
            </div>
            <img src={MainImg} alt="" />
          </div>
          
        </div>
    </div>
  )
}

export default Main