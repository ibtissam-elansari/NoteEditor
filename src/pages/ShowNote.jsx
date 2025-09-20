import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote } from '../redux/notesSlice';

function ShowNote() {
  const { id } = useParams();
  const Note = useSelector(state =>
    state.notes.notes.find(note => note.id === id) 
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editNote = () => navigate(`/editNote/${id}`);
  const deleteN = () => {
    dispatch(deleteNote(id));
    navigate('/'); 
  };
  const back = () => navigate('/');

  if (!Note) {
    return <p className="text-center">Note not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div className="flex sm:flex-col">
          <h2>{Note.title}</h2>
          <div className="flex justify-start flex-wrap">
            {Note.tags.map((tag, i) => (
              <span className="tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <button className="create-button mx-1" onClick={editNote}>Edit</button>
          <button className="delete-button mr-1" onClick={deleteN}>Delete</button>
          <button className="edit-button mr-8" onClick={back}>Back</button>
        </div>
      </div>
      <div className="mt-6">{Note.body}</div>
    </div>
  );
}

export default ShowNote;
