import { createContext, SyntheticEvent, useReducer, useRef } from 'react';
import { gsap } from 'gsap';
// Interfaces
import { RoomAuthFormProps, RoomAuthDataBack } from '../interfaces/interfaces';
// Custom Hooks
import { useInputChange } from '../hooks/useInputChange';
import { Navigate } from 'react-router-dom';
import { reducer } from '../reducer/reducer';

const INITIAL_STATE: RoomAuthDataBack = {
    type: '',
    payload: ''
}

export const roomAuthContext = createContext({} as RoomAuthDataBack);
const { Provider } = roomAuthContext;

export const RoomAuthForm = ( { placeholder, path }: RoomAuthFormProps ) => {

    const { formInput, handleInput } = useInputChange();

    const [ { type, payload } , dispatch] = useReducer(reducer, INITIAL_STATE);
    
    const inputAnimation = useRef(null);

    const timeline = gsap.timeline();

    const handleSubmit = ( e: SyntheticEvent ) => {    
        e.preventDefault();
    
        const input = (document.getElementById('input_roomauth') as HTMLInputElement);
        
        if ( !input.value ) {
            timeline.to( inputAnimation.current, { x: 10, duration: 0.1, ease: 'myWiggle' });
            timeline.to( inputAnimation.current, { x: -10, duration: 0.1, ease: 'myWiggle' } );
            timeline.to( inputAnimation.current, { x: 10, duration: 0.1, ease: 'myWiggle' });
            timeline.to( inputAnimation.current, { x: -10, duration: 0.1, ease: 'myWiggle' } );
            input.style.border = '2px solid red';
            return;
        }
        
        dispatch( { type: path, payload: input.value } );

        input.value = '';
    }

    if ( type === 'join' ) {
        return (
            <Navigate to='/register' replace />
        );
    }

    return (
        <Provider value={{
            type,
            payload
        }}>
            <form className="roomAuthForm" onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    autoFocus 
                    autoComplete="off" 
                    placeholder={ placeholder } 
                    onChange={ handleInput } 
                    value={ formInput } 
                    id='input_roomauth' 
                    ref={ inputAnimation }
                />
                <input 
                    type="submit" 
                    value='Enter' 
                />
            </form>
        </Provider>
    );
}
