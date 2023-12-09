import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {getRandomSurvey} from '../api/survey.api.js'
import {answerSurvey, countVotes} from '../api/answer.api.js'
import { useNavigate } from 'react-router-dom'

const Principal = () => {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    const [surveyId, setSurveyId] = useState();
    const [countOption1, setCountOption1] = useState();
    const [countOption2, setCountOption2] = useState();
    const [score, setScore] = useState(0);
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const voteSurvey = async (optionSelected)=> {
        try {
            await answerSurvey(surveyId, optionSelected);
            setButtonDisabled(true);
            const res = await countVotes(surveyId);
            
            setCountOption1(res.data.option1);
            setCountOption2(res.data.option2);

            if(optionSelected === 1 && res.data.option1 > res.data.option2){
                console.log("option ganadora 1");
                return setScore(score+1);
            }
            else if(optionSelected === 2 && res.data.option2 > res.data.option1){
                console.log("option ganadora 2");
                return setScore(score+1);
            }
            else if(res.data.option1 === res.data.option2){
                setScore(score+ 0.5);
                return console.log("empate");
            }
            else {
                console.log(optionSelected, res.data.option1, res.data.option2);
                console.log("you lose");
                navigate(`/you-lose/${score}`);
                // return setScore(0);
            }
            


        } catch (error) {
            console.log(error);
        }
    }


    const loadData = async ()=> {
        try {
            setCountOption1(null);
            setCountOption2(null);
            const res =  await getRandomSurvey();
            setSurveyId(res.data.id);
            setQuestions(res.data.questions);
            setButtonDisabled(false);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=> {
        loadData();   
    }, []);
  return (
    <div>
        <h1>score: {score}</h1>
        <h1>id: {surveyId}</h1>
        {
            questions?.map((q, i)=> (
                <h1 key={i}>{q.text}</h1>
            ))
        }
        <button disabled={buttonDisabled} onClick={()=> voteSurvey(1)} className="btn btn-success">opcion 1</button>
        <button disabled={buttonDisabled} onClick={()=> voteSurvey(2)} className="btn btn-success">opcion 2</button>
        
        {
            countOption1 || countOption2 ? ( <h1>votos totales: {countOption1} a {countOption2}</h1>)
            : (<div></div>)
        }
        {
            countOption1 || countOption2  ? (
                <button onClick={()=> loadData()} className="btn btn-primary">siguiente pregunta</button>
            ) : (<div></div>)
        }
    </div>
  )
}

export default Principal

