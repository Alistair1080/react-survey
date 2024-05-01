import { useState } from "react"
import CheckBoxs from "./CheckBoxs"
import RadioButtons from "./RadioButtons"


export default function Form ({answersList, setAnswersList}) {
    function handleChange (event) {
        formData[event.target.name] = event.target.value
        // console.log(formData)
    }

    let formData = {
        review: "",
        username: "",
        email: "",
        color: "",
        timeSpent: [],
    }


    function handleSubmit (event) {
        event.preventDefault()
        console.log(formData.color)

        setAnswersList([...answersList, formData])
        event.target.reset()
        // console.log(answersList)

        // Target form inputs and clear

        formData.review = ""
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <RadioButtons color={formData.color} formData={formData}></RadioButtons>
            </div>
            <div className="form__group">
                <h3>How do you like to spend time with your rubber duck</h3>
                <CheckBoxs timeSpent={formData.timeSpent}></CheckBoxs>
            </div>
            <label>
                What else have you got to say about your rubber duck?<textarea
                name="review"
                cols="30"
                rows="10"
                onChange={handleChange}
                // value={formData.review}
                ></textarea>
            </label>
            <label>Put your name here (if you feel like it):
                <input
                type="text"
                name="username"
                // value=""
                onChange={handleChange} 
                />
            </label>
            <label>Leave us your email pretty please??
                <input
                type="email"
                name="email"
                // value=""
                onChange={handleChange} 
                />
            </label>
            <input class="form__submit" type="submit" value="Submit Survey!" />
        </form>

    )
}