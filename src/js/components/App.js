import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from "./Form";
import Question from "./Question";
import Score from "./Score";
import { getQuestions } from "../actions/index";



const App = () => {

  // get username, questions array, question number and loading state
  const username = useSelector(state => state.username)
  const questions = useSelector(state => state.questions)
  const questionNo = useSelector(state => state.questionNo)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    // check if user name provided to fetch the questions
    if (username) {
      dispatch(getQuestions())
    }
  }, [username])

  // render components based on the store state 
  if (username === null || username === '') {
    // if no username provided render the form
    return <Form />

  } else {


    // if username provided but still getting the questions renders loading
    if (loading) {

      return <div>
        <h1>Student Name: {username}</h1>
        <p>Loading...</p>
      </div>


      // if not loading and question number <= 5 render the question based on the questionNo
    } else if (!loading && questionNo <= 5) {

      return <div>
        <h1>Student Name: {username}</h1>
        <Question q={questions[questionNo - 1]} key={questions[questionNo - 1]._id} />
      </div>

    } else {
    // if all done render the Score 
      return <Score />

    }

  }



};

export default App;