import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: "1",
      title: "Task 1",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2"],
    },
    {
      id: "2",
      title: "Task 2",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
      id: "3",
      title: "Task 3",
      body: "bla bla bla",
      tags: ["Tag1"],
    },
  ],
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => state.notes.push({id: nanoid(), ...action.payload}),
    editNote: (state, action) => state.notes = state.notes.map((note) => note.id === action.payload.id ? action.payload : note),
    deleteNote: (state, action) => state.notes.filter(note => note.id !== action.payload),
  }
})

export const { createNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;