import React from 'react'
import { useParams } from 'react-router-dom'

function ShowTask() {
  const {id} = useParams();
  return (
    <div>ShowTask of {id}</div>
  )
}

export default ShowTask