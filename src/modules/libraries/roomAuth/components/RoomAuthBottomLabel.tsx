import { NavLink } from 'react-router-dom';
import { RoomAuthBottomLabelProps } from '../interfaces/interfaces';

export const RoomAuthBottomLabel = ( { labelMessage, path }: RoomAuthBottomLabelProps ) => {
    return (
        <div className='roomAuthBottom'>
            <NavLink to={ `/${ path }` } className='roomAuthBottomLabel'>{ labelMessage }</NavLink>
        </div>
    );
}