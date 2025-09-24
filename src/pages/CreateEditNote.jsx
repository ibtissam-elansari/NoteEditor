import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomDropdown from '../components/CustomDropdown';

function CreateEditNote() {

  const { id } = useParams();
  const Notes = useSelector(state => state.notes.notes);
  
  const note = id ? Notes.find(note => note.id === id) : null;

  const [title, setTitle] = useState(id ? note.title : "");
  const [body, setBody] = useState(id ? note.body : "");

return (
  <div className="max-w-4xl mx-auto p-4">
    <h2>Edit Note</h2>
    <form className="flex flex-col mt-5 w-full space-y-4">
      <div className="flex flex-col md:flex-row md:space-x-5 w-full space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2">
          <label>Title</label>
          <input
            type="text"
            className="w-full my-1 border-1 border-gray-300 rounded-xs p-[0.45rem]"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full md:w-1/2">
          <label>Tags</label>
          <CustomDropdown selectedTags={id && note.tags} />
        </div>
      </div>
      <div className="w-full">
        <label>Body</label>
        <textarea rows={25} value={body} onChange={(e) => setBody(e.target.value)}
          className="w-full my-2 border-1 border-gray-300 rounded-xs p-[0.45rem] resize-none"
        />
      </div>
    </form>
  </div>
);

}

export default CreateEditNote;