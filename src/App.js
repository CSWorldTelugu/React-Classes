import Product from "./Product"



function App() {

      let prod1 = {
            id: 1,
            name: "Lenovo Think Pad",
            aprice: 120000,
            dprice: 100000

      }
      return (
            <Product {...prod1} />
      )
}



export default App