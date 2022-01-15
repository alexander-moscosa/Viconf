import { ChangeEvent, useState } from "react";

export const useInputChange = () => {

    const [formInput, setFormInput] = useState('');

    const handleInput = ( e: ChangeEvent<HTMLInputElement> ) => {
        setFormInput( e.target.value );
    }

    return {
        formInput,
        handleInput
    };

}