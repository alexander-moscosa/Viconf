import RoomAuthCard from "../../libraries/roomAuth/components"

export const CreateViconf = () => {
    return (
        <div className='roomAuthContent'>
            <RoomAuthCard>
                <RoomAuthCard.Label labelMessage='Create your Viconf here:' />
                <RoomAuthCard.Form placeholder='Username' path='create' />
                <RoomAuthCard.BottomLabel labelMessage='Join with a Viconf PIN' path='join' />
            </RoomAuthCard>
        </div>
    )
}
