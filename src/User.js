/* Using functional Component
function User(props) {
    return (

        <div>
            <h1>Name:{props.name}</h1>
            <h2>Age:{props.age}</h2>
            <h2>Age:{props.place}</h2>
        </div>
    )
}


*/

import React from "react";

/*Using Class Component */

class User extends React.Component {
    render() {
        return (

            <div>
                <h1>Name:{this.props.name}</h1>
                <h2>Age:{this.props.age}</h2>
                <h2>Age:{this.props.place}</h2>
            </div>
        )
    }
}


export default User

