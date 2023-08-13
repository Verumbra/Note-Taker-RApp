

import { UIButton } from './UIButton';
import { Title } from './Title';

import './scss/Note.scss';


interface noteProps {
    name: string;
    note: string;
    Id: number;
}


export const Note = ({name, note, Id}: noteProps) => {

    const handleCallback = (value: string) => {
        switch (value) {
            case 'delete':
                // implement delete logic
                break;
            case 'minimize':
                // implement minimize logic
                break;
        }
    };

    return (
        <div id={Id.toString()} className="note-frame" >
            <UIButton callback={handleCallback}/>
            <Title side="left">{name}</Title>
            <body className="note-body">{note}</body>
        </div>)
} 