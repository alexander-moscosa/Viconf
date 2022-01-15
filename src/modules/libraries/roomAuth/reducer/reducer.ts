import { RoomAuthDataBack, RoomAuthDataAction } from '../interfaces/interfaces';

export const reducer = ( state: RoomAuthDataBack, action: RoomAuthDataAction  ): RoomAuthDataBack => {

    switch( action.type ) {
        case 'join':
            return {
                type: 'join',
                payload: action.payload
            }
        case 'create':
            return {
                type: 'create',
                payload: action.payload
            }
        default: 
            return state;
    }
}