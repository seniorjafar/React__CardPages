import React from 'react'
import { inc } from '../../context/counterSlice'
import { useDispatch } from 'react-redux'

const Main = () => {
    // HOC
    let dispatch = useDispatch()
  return (
    <div>
        <h2>Main</h2>
        <button onClick={()=> dispatch(inc(1))}>increment</button>
        <button onClick={()=> dispatch(inc(10))}>increment 10</button>
        <button onClick={()=> dispatch(inc(100))}>increment 100</button>
    </div>
  )
}

export default Main