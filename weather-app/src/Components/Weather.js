import React from "react"

const Weather = props =>{
    console.log('my props',props)
    return(
        <div>
            <h2>City: {props.name} </h2>
            <h2> Temp: {props.main && Math.round(props.main.temp)} </h2>
        </div>
    )
}


export default Weather