import { useState } from 'react';

import { Title } from './Title';

import './scss/NoteCreationForm.scss';

interface fromProps {
    onSubmit: (val: NoteItem) => void;
    onCancel: (value: string) => void;
}

type NoteItem = {
    id: string;
    name: string;
    note: string;
  }

export const NoteCreationForm = ({onSubmit, onCancel}: fromProps) => {

    const [name, setName] = useState('');
    const [note, setNote] = useState('');

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    const handleCancel = () => {
        onCancel('Cancel');
    }

    function getUUID() {
        return ((crypto.randomUUID).toString())
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const item:NoteItem={id: getUUID(),name:name,note:note}
        onSubmit(item);
    }

    return (
        <form onSubmit={handleSubmit} className="newnote-form">
            <Title side='center' size={null} wieght={null}>Note Creation</Title>
            <input className='name-input' type="text" value={name} placeholder="name" onChange={handleName}/>
            <input className='note-input' type="text" value={note} placeholder="add notes..." onChange={handleNote} />
            <hr />
            <div className='btn-from-wrapper'>
                <button className='btn-submit' type="submit" >Create</button>
                <button className='btn-cancel' type="button" onClick={handleCancel} >Cancel</button>
            </div>
        </form>)
}