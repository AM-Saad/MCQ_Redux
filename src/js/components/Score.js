import React from "react";
import { useSelector } from "react-redux";

const Questions = () => {
    
    // Get user name and finle score
    const score = useSelector(state => state.score) 
    const username = useSelector(state => state.username) 

    return (
        <div className="result p-large bg-w b-r-small shadow f-center">
            <div>
                <h1 className="m-b-large">Student Name: {username}</h1>
                <h2 className="m-t-large">Your Score : {score} pts</h2>
            </div>
        </div>
    );
};

export default Questions;