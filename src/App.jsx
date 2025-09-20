import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NoteEditor from './pages/NoteEditor'
import ShowNote from './pages/ShowNote'
import EditNote from './pages/EditNote'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NoteEditor/>}/>
          <Route path='/showNote/:id' element={<ShowNote/>}/>
          <Route path='/editNote/:id' element={<EditNote/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App