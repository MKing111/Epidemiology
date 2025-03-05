import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Sidebar } from './components'
import { Home } from './pages'


function App() {

  return (
    <BrowserRouter>
        <Sidebar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
