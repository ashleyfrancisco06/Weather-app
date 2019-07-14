import React from "react"

function WeatherForm(props) {
    return(
        <div>
            <form onSubmit={props.onFormSubmit}>
            <input type="number"
            placeholder=" Zip Code"
            value={props.inputFormValue}
            onChange={props.handleInputChange} />

            <input type="submit"
            value="Get The Weather" />
            </form>
        </div>
    )
}


export default WeatherForm