import React from "react";
import { useDispatch, } from 'react-redux';
import { nextQuestion } from "../actions/index";




function Answer(prop) {
    // save the question ID and answer to use when hit next question
    let questionId = prop.questionId
    let selectedAnswer = prop.answer

    const dispatch = useDispatch();

    
    // Get next question when choose specific answer 
    function getNextQuestion() {
        let payload = {
            answer: selectedAnswer,
            questionId: questionId
        }
        dispatch(nextQuestion(payload))
    }

    return (
        <li onClick={getNextQuestion} className="answer b-r-medium bg-lightgray p-large m-large">
            {prop.answer}
        </li>
    );
};

export default Answer;