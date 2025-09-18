import React, { useState } from 'react'

function Tasks() {
  const [Tasks, setTasks] = useState([
    {
      title: "Task 1",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2"],
    },
    {
      title: "Task 2",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
      title: "Task 3",
      body: "bla bla bla",
      tags: ["Tag1"],
    },

  ]);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className='flex items-center justify-between'>
        <h1>Notes</h1>
        <div className='flex items-center justify-end'>
          <button 
            className='create-button mx-2'
            onClick={() => createTask()}
          >Create</button>
          <button className='edit-button mr-8'>Edit Tags</button>
        </div>
      </div>

      <form action="" className='flex flex-col space-y-4 mt-5 w-full md:flex-row space-x-5 justify-center'>
        <div className='w-full md:w-1/2'>
          <label htmlFor="">Title</label>
          <input type="text" className='w-full my-1 input'/>
        </div>
        <div className='w-full md:w-1/2'>
          <label htmlFor="">Tags</label>
          <select name="tags" id="tags" className='w-full my-1 input h-6'>
            <option value="" disabled>Select...</option>
          </select>
        </div>
      </form>
      <div className='grid grid-cols-2 mt-4 gap-4'>
        {Tasks.map((task, i) => (
          <div key={i} className='flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg p-4'>
            <h2 className='text-2xl'>{task.title}</h2>
            <div className='flex justify-center flex-wrap mt-2'>
              {task.tags.map((tag, i) => (
                <div className='tag' key={i}>{tag}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Tasks;