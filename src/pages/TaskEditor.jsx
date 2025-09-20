import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import FilterTasks from '../components/FilterTasks';
import TasksList from '../tasks'
import { useNavigate } from 'react-router-dom';

function TaskEditor() {
  const navigate = useNavigate();
  
  const showTask = (id) => {
    navigate(`/showTask/${id}`);
  }


  return (
    <div className="max-w-4xl mx-auto p-4">
      <Navbar/>
      <FilterTasks/>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4'>
        {TasksList.map((task, i) => (
          <div onClick={() => showTask(task.id)} key={i} className='flex flex-col justify-center items-center border-1 border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer'>
            <h2 className='text-xl'>{task.title}</h2>
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

export default TaskEditor;