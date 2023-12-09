import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const YouLose = () => {
  const {score} = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
        <h1>You lose</h1>
        <h2>your score is: {score}</h2>
        <button onClick={()=> {return navigate("/home")}} className="btn btn-success">volver a jugar</button>
    </div>
  )
}

export default YouLose