import React from 'react'

function Navbar() {

  const createNote = () => {

  }

  const editTag = () => {

  }

  return (
    <div className='flex items-center justify-between flex-col sm:flex-row'>
      <h1>Notes</h1>
      <div>
        <button className='create-button mx-2' onClick={() => createNote()}>Create</button>
        <button className='edit-button mr-8' onClick={() => editTag()}>Edit Tags</button>
      </div>
    </div>
  )
}

export default Navbar