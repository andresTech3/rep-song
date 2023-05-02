import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavRepos from './components/NavRepos'



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NavRepos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App





