import React from 'react';

//Can be converted into a functional component
//Functional components dont get a props passed to it. Hence it has to be passed as a parameter
const Ninjas = (props) => {
        //console.log(this.props)
        const {ninjas} = props //Destructuring
        const ninjaList = ninjas.map(
            ninja => {
                return(
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                    </div>
                )
            }
        )
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>   
        )
}

export default Ninjas