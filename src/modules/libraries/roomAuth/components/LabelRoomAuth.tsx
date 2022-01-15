import { RoomAuthLabelProps } from "../interfaces/interfaces"

export const LabelRoomAuth = ( { labelMessage }: RoomAuthLabelProps ) => {
    return (
        <div className="roomAuthLabel">
            <h1>{ labelMessage }</h1>
        </div>
    )
}
