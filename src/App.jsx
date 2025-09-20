import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskEditor from './pages/TaskEditor'
import ShowTask from './pages/ShowTask'
import EditTask from './pages/EditTask'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<TaskEditor/>}/>
          <Route path='/showTask/:id' element={<ShowTask/>}/>
          <Route path='/editTask/:id' element={<EditTask/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App