import { RoomAuthCard as RoomAuthCardHOC } from './RoomAuthCard';
import { LabelRoomAuth } from './LabelRoomAuth';
import { RoomAuthForm } from './RoomAuthForm';
import { RoomAuthBottomLabel } from './RoomAuthBottomLabel';

export { RoomAuthBottomLabel } from './RoomAuthBottomLabel';
export { RoomAuthForm } from './RoomAuthForm';
export { LabelRoomAuth } from './LabelRoomAuth';

export const RoomAuthCard = Object.assign( RoomAuthCardHOC, {
    Label: LabelRoomAuth,
    Form: RoomAuthForm,
    BottomLabel: RoomAuthBottomLabel
});

export default RoomAuthCard;