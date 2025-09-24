import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: "1",
      title: "Task 1: bla bla bla",
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
    {
      id: "4",
      title: "Task 1: bla bla bla",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2"],
    },
    {
      id: "5",
      title: "Task 2",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
      id: "6",
      title: "Task 3",
      body: "bla bla bla",
      tags: ["Tag1"],
    },
    {
      id: "7",
      title: "Task 1: bla bla bla",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2"],
    },
    {
      id: "8",
      title: "Task 2",
      body: "bla bla bla",
      tags: ["Tag1", "Tag2", "Tag3"],
    },
    {
      id: "9",
      title: "Task 3",
      body: "bla bla bla",
      tags: ["Tag1"],
    },
    {
      id: "10",
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
    editNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    removeTag: (state, action) => {
      state.notes = state.notes.find(note => note.id === action.payload.id).tags.filter(t => tag !== action.payload.tag)
    }
  }
})

export const { createNote, editNote, deleteNote, removeTag } = notesSlice.actions;
export default notesSlice.reducer;