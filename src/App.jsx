import { BrowserRouter, Route, Routes } from "react-router-dom"
import Principal from "./components/Principal"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" Component={Principal}></Route>
      </Routes>
    </BrowserRouter>  
  )
}

export default App