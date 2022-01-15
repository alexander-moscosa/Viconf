import { RoomAuthCardProps } from '../interfaces/interfaces';

export const RoomAuthCard = ( { children }: RoomAuthCardProps ) => {
    
    return (
        <div className="roomAuthCard">
            { children }
        </div>
    );
}

export default RoomAuthCard;