import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function FilterTasks() {
  const notes = useSelector(state => state.notes.notes);
  const allTags = [...new Set(notes.flatMap(note => note.tags))];

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");


  return (
    <form action="" className='flex flex-col space-y-4 mt-5 w-full sm:flex-row space-x-5 justify-center'>
      <div className='w-full md:w-1/2'>
        <label htmlFor="">Title</label>
        <input type="text" className='w-full my-1 border-1 border-gray-300 rounded-xs p-2 text-gray-700' value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className='w-full md:w-1/2'>
        <label htmlFor="">Tags</label>
        <select name="tags" id="tags" className='w-full my-1 border-1 border-gray-300 rounded-xs p-[0.6rem] text-gray-700' onSelect={() => setTag(e.target.value)}>
          <option value="" disabled selected>Select...</option>
          {allTags.map((tag, i) => (
              <option key={i} value={tag} >{tag}</option>
          ))}
        </select>
      </div>
    </form>
  )
}

export default FilterTasks