import React from 'react'

import products from '../Data/products.json'
function Products({ onDataReceived }) {
    const addToCart = (Id) => {
        onDataReceived(Id)
    }
    return (
        <section>
            <div className="products">
                {
                    products.map((product) => {
                        return (
                            <>
                                <div className="card" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="box">
                                            <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to cart</button>
                                            <div className="price">${product.price}</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Products
