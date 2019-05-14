export const LOGIN_REQUEST = 'ICT/auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'ICT/auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'ICT/auth/LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'ICT/auth/LOGOUT_SUCCESS';

export type Profile = {
    sub: string,
    nickname: string,
    name: string,
    picture: string,
    updated_at: string,
    email: string,
    email_verified: string
}
