import { useContext } from "react"
import { roomAuthContext } from "../../libraries/roomAuth/components/RoomAuthForm"
import { Navigate } from 'react-router-dom';
import RoomAuthCard from "../../libraries/roomAuth/components";

export const Register = () => {

    const { type, payload } = useContext(roomAuthContext);

    console.log({ type, payload });
    
    return (
        <div className="roomAuthContent">
            <RoomAuthCard>
                <RoomAuthCard.Label labelMessage='Register:' />
                <RoomAuthCard.Form placeholder='Username' path='join' />
                <RoomAuthCard.BottomLabel labelMessage='Create your Viconf PIN' path='create' />
            </RoomAuthCard>
        </div>
    );
}
