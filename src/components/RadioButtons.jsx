export default function RadioButtons ({color, formData}) {
    // console.log(color)

    function handleChange (event) {
        console.log(color)
        console.log(formData)
        // console.log(event.target.checked === true)
        console.log(event.target.value)
        // if (event.target.checked === true) {
        //     color = event.target.value
        // }
        formData.color = event.target.value
        // console.log(color)
    }

    return (
        <ul>
            <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleChange} /><label
                for="color-one" 
                >1</label>
            </li>
            <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleChange} /><label
                for="color-two"
                >2</label>
            </li>
            <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleChange} /><label
                for="color-three"
                >3</label>
            </li>
            <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleChange} /><label
                for="color-four"
                >4</label>
            </li>
        </ul>
    )
}