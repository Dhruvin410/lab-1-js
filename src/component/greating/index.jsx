import React from 'react';


function Greeting(props) {
    return (

        <div>
            <header>
                <h1 style={{color:"brown"}}>Hi, {props.name}, hey hope you are doing good</h1>
            </header>
        </div>

    );
}

export default Greeting;