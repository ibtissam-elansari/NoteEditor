import React from 'react'
import { useParams } from 'react-router-dom'

function ShowNote() {
  const {id} = useParams();
  return (
    <div>ShowNote of {id}</div>
  )
}

export default ShowNote