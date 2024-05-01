export default function CheckBoxs ({timeSpent}) {
    // pass a  variable to this function to populate the answer from the checkboxes
    
    // console.log(timeSpent)
    

    function handleClick (event) {
        console.log(event.target.checked)
        console.log(event.target.value)
        let checked = event.target.checked
        if (checked === true) {
            timeSpent.push(event.target.value)
        }
        else {
            console.log(timeSpent)
            let index = timeSpent.indexOf(event.target.value)
            timeSpent.splice(index, 1)
            console.log(timeSpent)
        }        
        
    }

    return (
        <ul>
            <li>
                <label
                ><input
                    name="spend-time"
                    type="checkbox"
                    value="swimming"
                    // checked={false}
                    onClick={handleClick}
                />Swimming</label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="bathing" 
                    onClick={handleClick}
                    />Bathing
                </label>
            </li>
            <li>
                <label>
                    <input
                    name="spend-time"
                    type="checkbox"
                    value="chatting"
                    onClick={handleClick}
                    />Chatting
                </label>
            </li>
            <li>
                <label>
                    <input 
                    name="spend-time" 
                    type="checkbox" 
                    value="noTime" 
                    onClick={handleClick}
                    />I don't like to
                spend time with it
                </label>
            </li>
        </ul>
    )
}