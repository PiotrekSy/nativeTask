import { ButtonProps } from '../types';

export const loginButton: ButtonProps = {
    title: 'Zaloguj się',
    id: 'simpleLogin',
    mode: 'filled',
    icon: ' ',
    navigateTo: 'Login'
};

export const listButtonsData: ButtonProps[] = [
    {
        title: 'Użyj konta Google',
        id: 'googleLogin',
        mode: 'outlined',
        icon: '../../../assets/images/Icon_Google.png',
        navigateTo: 'Login',
    },
    {
        title: 'Użyj konta Facebook',
        id: 'fbLogin',
        mode: 'outlined',
        icon: '../../../assets/images/Icon_Facebook.png',
        navigateTo: 'Login'

    },
    {
        title: 'Użyj konta Apple',
        id: 'appleLogin',
        mode: 'outlined',
        icon: '../../../assets/images/Icon_Apple.png',
        navigateTo: 'Login'

    },
];

export const registerButton: ButtonProps = {
    title: 'Zarejestruj się E-mailem',
    id: 'register',
    mode: 'outlined',
    icon: '../../../assets/Icon_Mail.png',
    navigateTo: 'Register'
};