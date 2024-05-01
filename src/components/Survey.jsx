import { useState } from "react";
import AnswersList from "./AnswersList";
import Form from "./Form";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}></AnswersList>
      </section>
      <section className="survey__form">
        <Form answersList={answersList} setAnswersList={setAnswersList}></Form>
      </section>
    </main>
  );
}

export default Survey;
