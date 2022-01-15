import { ChangeEvent, useState } from 'react';
import { RoomAuthFormProps } from '../interfaces/interfaces';

export const RoomAuthForm = ( { placeholder }: RoomAuthFormProps ) => {

    const [formInput, setFormInput] = useState('');

    const handleInput = ( e: ChangeEvent<HTMLInputElement> ) => {
        setFormInput( e.target.value );
    }

    return (
        <form className="roomAuthForm">
            <input type="text" autoFocus autoComplete="off" placeholder={ placeholder } onChange={ handleInput } value={ formInput }/>
            <input type="submit" value='Enter' />
        </form>
    );
}
