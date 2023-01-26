import React, { useState } from "react"

function App() {





      let [product, updateProduct] = useState({
            pname: 'Real me 10 pro',
            price: 16000
      })




      return (
            <>
                  <h1>Product:{product.pname}</h1>
                  <p>Price:{product.price}</p>
                  <h1>Product:{JSON.stringify(product)}</h1>




                  <input id='pname' />
                  <button onClick={() => {

                        let mprice = document.getElementById('pname').value;
                        updateProduct({

                              ...product,
                              price: mprice
                        })

                  }}>Update</button>

            </>
      )






}

export default App





