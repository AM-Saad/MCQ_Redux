import { Enroll_Student } from "../constants/action-types";

export function enrollStudent(payload) {
    return { type: Enroll_Student, payload }
};



// Fetch qustions API and despatch Question_loaded action
export function getQuestions() {
    return function (dispatch) {
        return fetch("http://localhost:4000/questions")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "QUESTIONS_LOADED", payload: json });
            });
    }
}

export function nextQuestion(payload) {
    return { type: "NEXT_QUESTION", payload };

}