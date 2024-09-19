import { UserType } from './user-type.enum.js';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    avatarPath: string;
    password: string;
    type: UserType;
}