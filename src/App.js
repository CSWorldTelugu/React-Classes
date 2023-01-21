import React, { useState } from "react"

//useState() method(hook) in functional  component
function App() {
      let [counter, updateCounter] = useState(0)
      return (
            <>
                  <h1>Counter Value :{counter}</h1>
                  <button onClick={() => {
                        updateCounter(++counter)
                  }}>Change</button>
            </>
      )
}

/*State in Class component

class App extends React.Component {
      st = {
            counter: 0
      }
      render() {
            return (
                  <>
                        <h1>Counter Value :{this.st.counter}</h1>
                        <button onClick={() => {
                              this.setState({
                                    counter: this.st.counter + 1
                              })
                        }}>Change</button>
                  </>
            )

      }

} */

export default App





