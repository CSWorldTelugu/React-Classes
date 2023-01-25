import React from "react"

class App extends React.Component {



      constructor() {
            super();
            this.updatePrice = this.updatePrice.bind(this);
            this.state = {
                  product: "Real me 8 pro",
                  price: 20000
            }
      }

      render() {
            return (
                  <>
                        <h1>Product:{this.state.product}</h1>
                        <p>Price:{this.state.price}</p>

                        <input id='price' type='number' />
                        <button onClick={this.updatePrice}>Update</button>
                  </>
            )

      }


      updatePrice() {

            let p = document.getElementById('price').value;

            this.setState({
                  price: p

            }, () => {
                  console.log(this.state);
            })


      }




}

export default App





