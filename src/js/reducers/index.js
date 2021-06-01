import { Enroll_Student } from "../constants/action-types";

const initialState = {
    username: null,
    questions: [],
    loading: true,
    questionNo: 1,
    score: 0
};

function rootReducer(state = initialState, action) {

    // Enroll student to quiz
    if (action.type === Enroll_Student) {
        // add the user name 
        return Object.assign({}, state, {
            username: action.payload,
        });

    }

    // Concat the quetions after been loaded from the server
    if (action.type === "QUESTIONS_LOADED") {
        return Object.assign({}, state, {
            questions: state.questions.concat(action.payload),
            loading: false,
        });
    }


    // Get the next question
    if (action.type === "NEXT_QUESTION") {

        // Find the correct answer of the current question
        let correct = state.questions.find(q => q._id.toString() === action.payload.questionId).correct_answer

        // Check if correct answer if the same as the choosen answer
        if (correct === action.payload.answer) {

            // Add new point if the same answer and update the question number to get the next one
            return Object.assign({}, state, {
                score: state.score + 1,
                questionNo: state.questionNo + 1
            });
        } else {
            // Update the question number to get the next one
            return Object.assign({}, state, { questionNo: state.questionNo + 1 });
        }

    }

    return state;
};

export default rootReducer;