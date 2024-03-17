import React, { useEffect, useState } from 'react'
import { DatePicker, Button } from 'antd';
import './App.css'
import products from './Data/products.json'
import Navbar from './Components/Navbar';
import Products from './Components/Products';


function App() {

  useEffect(()=>{
    let stroedItems = localStorage.getItem('myCart');
    if(stroedItems){
      setCartArr(JSON.parse(stroedItems))
    }
  },[])

  const handleChildData = (data) => {
    let found = products.find(p => p.id === data)
    if (cartArr.includes(found)) {
      alert('This product is already in cart.')
    }
    else {
      const newCartArr = [...cartArr, found]
      setCartArr(newCartArr)
      localStorage.setItem('myCart', JSON.stringify(newCartArr))
    }
  };
  
  const removeFromCart = (productId) => {
    // console.log(productId)
    let updatedCart = cartArr.filter(product => product.id !== productId)
    // console.log(updatedCart)
    setCartArr(updatedCart)
    localStorage.setItem('myCart', JSON.stringify(updatedCart))
  }


  const [cartArr, setCartArr] = useState([])

  return (
    <>
      <Navbar cartArr={cartArr} removeFromCart={removeFromCart} />
      <Products onDataReceived={handleChildData} />
    </>
  )
}

export default App
