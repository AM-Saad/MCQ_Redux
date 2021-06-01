import React from "react";
import { enrollStudent } from "../actions/index";
import { useDispatch, } from 'react-redux';


function Form() {
  const dispatch = useDispatch();

  // Submit user name
  function submitUser() {
    
    // get user name
    const name = document.getElementById('name').value
    if (!name) return

    // Dispatch the user name to the store
    dispatch(enrollStudent(name))
  }

  return <div className="p-large bg-w b-r-medium shadow">
    <h1 className="m-b-xlarge m-t-xlarge f-center font-xlarge">MCQ Quiz</h1>
    <input className="border-1-b bg-lightgray b-none w-100 border-none p-large b-r-medium m-b-large m-t-large font-medium" id="name" placeholder="Add your name..  " />
    <button className="btn font-medium" onClick={submitUser}>Enroll</button>
  </div>
}

export default Form;