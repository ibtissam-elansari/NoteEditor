import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomDropdown from '../components/CustomDropdown';

function CreateEditNote() {

  const { id } = useParams();
  const Notes = useSelector(state => state.notes.notes);
  
  const note = id ? Notes.find(note => note.id === id) : null;

  const allTags = [...new Set(Notes.flatMap(note => note.tags))];

  const [title, setTitle] = useState(id ? note.title : "");
  const [tag, setTag] = useState(id ? note.tags : []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2>Edit Note</h2>
      <form action="" className='flex flex-col space-y-4 mt-5 w-full sm:flex-row space-x-5 justify-center'>
        <div className='w-full md:w-1/2'>
          <label htmlFor="">Title</label>
          <input type="text" className='w-full my-1 border-1 border-gray-300 rounded-xs p-[0.45rem]' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='w-full md:w-1/2'>
          <label htmlFor="">Tags</label>
          <CustomDropdown selectedTags={id && note.tags}/>
        </div>
      </form>
    </div>
  )
}

export default CreateEditNote;