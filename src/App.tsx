import { useState } from 'react'
import { NavBar } from './components/NavBar';
import { Note } from './components/Note';
import { NoteCreationForm } from './components/NoteCreationForm';

import './App.scss'

 type NoteItem = {
    id: string;
    name: string;
    note: string;
  }

function App() {

  const [form, setForm] = useState<true | false>(false);

  const [notes, setNotes] = useState<NoteItem[]>([]);

  function handleCancel(value: string) {
    setForm(false);
  }

  const formStatus = () => {
    setForm(!form);
  }

  const handleSubmit = (value: NoteItem) => {
    setNotes((prevState) =>[...prevState, value])
  }

  return (
    <>
      <NavBar onClick={(formStatus)} />
      {form?<NoteCreationForm onSubmit={handleSubmit} onCancel={handleCancel} />:''}
      <div className="main-body">
      {notes.map(note => {
          return<>
            <Note key={note.id} Id={note.id} name={note.name} note={note.note} ></Note>
          </>
      })}

      </div>

    </>
  )
}

export default App
