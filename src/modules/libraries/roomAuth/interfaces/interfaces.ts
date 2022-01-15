import { ReactElement } from 'react';

export interface RoomAuthCardProps {
    children?: ReactElement | ReactElement[];
}

export interface RoomAuthLabelProps {
    labelMessage: string;
}

export interface RoomAuthFormProps {
    placeholder: string;
    path: string;
}

export interface RoomAuthBottomLabelProps {
    labelMessage: string;
    path: string;
}

export interface RoomAuthDataBack {
    type: string;
    payload: string;
}

export type RoomAuthDataAction = { type: string, payload: string };