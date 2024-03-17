import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
function Navbar({ cartArr, removeFromCart }) {

    // let [quantity, setQuantity] = useState(1)
    const [quantities, setQuantities] = useState({});



    // const increment = () => {
    //     setQuantity(quantity++)
    // }

    const handleIncrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1
        }));
    };


    const handleDecrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0)
        }));
    };


    const deleteProduct = (productId) => {
        removeFromCart(productId)
    }


    return (
        <nav>
            <h1 className='title'>Add To Cart</h1>
            <div className="cart ">
                <div className="inner-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    {
                        cartArr.length === 0 ?
                            <span className="number"></span> :
                            <span className="number">{cartArr.length}</span>
                    }
                    <ShoppingCartOutlined style={{ fontSize: '30px', color: 'white' }} />
                </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header ">
                        <h4 className="offcanvas-title" id="offcanvasRightLabel">Cart</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr />
                    <div className="offcanvas-body p-0 px-2 ">
                        {
                            cartArr.map((product) => {
                                const productId = product.id;
                                const quantity = quantities[productId] || 0;
                                return (
                                    <>
                                        <div className="productCart" key={product.id}>
                                            <div className="titleBox">
                                                <img src={product.image} alt="" className="imageCart" />
                                                <div className="namePrice">
                                                    <h4 className="productName">{product.title}</h4>
                                                    <div className="productPrice">${product.price * (quantity + 1)}</div>
                                                </div>
                                            </div>
                                            <div className="priceBox">
                                                <button onClick={() => deleteProduct(productId)} type='btn' className='btn-close'></button>
                                                <div className="quantity">
                                                    <button onClick={() => handleDecrement(productId)} className="bbtn dec">-</button>
                                                    <h6 className="counter">{quantity + 1}</h6>
                                                    <button onClick={() => handleIncrement(productId)} className="bbtn inc">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
