import React from "react";
import Answer from './Answer'
import { useSelector } from "react-redux";

const Questions = (prop) => {
    // Get the current question number
    const questionNo = useSelector(state => state.questionNo) 

    // shuffle the question asnwers
    const shuffled = prop.q.answers.sort(() => Math.random() - 0.5)
    return (
        <div className="m-large p-large bg-w shadow b-r-medium">
            <div className="flex m-b-xlarge m-t-xlarge">
                <p className="question">
                    <span>#{questionNo} </span>
                    {prop.q.question}
                </p>

            </div>
            <ol className="m-large">
                {shuffled.map((object, i) => <Answer answer={object} questionId={prop.q._id} key={i._id} />)}
            </ol>

        </div>
    );
};

export default Questions;