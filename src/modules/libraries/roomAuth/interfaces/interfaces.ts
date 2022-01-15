import { ReactElement } from 'react';

export interface RoomAuthCardProps {
    children?: ReactElement | ReactElement[];
}

export interface RoomAuthLabelProps {
    labelMessage: string;
}

export interface RoomAuthFormProps {
    placeholder: string;
}

export interface RoomAuthBottomLabelProps {
    labelMessage: string;
    path: string;
}