import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import FilterNotes from '../components/FilterNotes';
import NotesList from '../notesList'
import { useNavigate } from 'react-router-dom';

function NoteEditor() {
  const navigate = useNavigate();
  
  const showNote = (id) => {
    navigate(`/showNote/${id}`);
  }


  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar/>
      <FilterNotes/>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4'>
        {NotesList.map((note, i) => (
          <div onClick={() => showNote(note.id)} key={i} className='flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer'>
            <h2 className='text-xl'>{note.title}</h2>
            <div className='flex justify-center flex-wrap mt-2'>
              {note.tags.map((tag, i) => (
                <div className='tag' key={i}>{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default NoteEditor;