import RoomAuthCard from '../../libraries/roomAuth/components';

export const Login = () => {
    return (
        <div className='roomAuthContent'>
            <RoomAuthCard>
                <RoomAuthCard.Label labelMessage='Enter your PIN here:' />
                <RoomAuthCard.Form placeholder='Video Conference PIN' />
                <RoomAuthCard.BottomLabel labelMessage='Create your Viconf PIN' path='create' />
            </RoomAuthCard>
        </div>
    );
}
 