import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NoteEditor from './pages/NoteEditor'
import ShowNote from './pages/ShowNote'
import CreateEditNote from './pages/CreateEditNote'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<NoteEditor/>}/>
          <Route path='/showNote/:id' element={<ShowNote/>}/>
          <Route path='/createNote' element={<CreateEditNote/>}/>
          <Route path='/editNote/:id' element={<CreateEditNote/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App