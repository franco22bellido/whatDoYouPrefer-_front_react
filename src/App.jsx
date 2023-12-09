import { BrowserRouter, Route, Routes } from "react-router-dom"
import YouLose from './components/YouLose'
import Principal from "./components/Principal"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Principal}></Route>
        <Route path="/you-lose/:score" Component={YouLose}></Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App