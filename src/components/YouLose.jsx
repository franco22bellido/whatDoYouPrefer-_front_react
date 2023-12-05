import React from 'react'
import {useNavigate} from 'react-router-dom'

const YouLose = () => {

  const navigate = useNavigate();
  return (
    <div>
        <h1>You lose</h1>
        <button onClick={()=> {return navigate("/home");}}>play again</button>
    </div>
  )
}

export default YouLose
