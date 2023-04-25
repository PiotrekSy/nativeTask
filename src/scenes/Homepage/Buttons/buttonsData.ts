import { ButtonProps } from '../types';
// import { Icon_Google } from '../../../assets/images/Icon_Google.png';
// import {Icon_Mail}

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
        icon: require('./../../../assets/images/Icon_Google.png'),
        navigateTo: 'Login',
    },
    {
        title: 'Użyj konta Facebook',
        id: 'fbLogin',
        mode: 'outlined',
        icon: require('./../../../assets/images/Icon_Facebook.png'),
        navigateTo: 'Login'

    },
    {
        title: 'Użyj konta Apple',
        id: 'appleLogin',
        mode: 'outlined',
        icon: require('./../../../assets/images/Icon_Apple.png'),
        navigateTo: 'Login'

    },
];

export const registerButton: ButtonProps = {
    title: 'Zarejestruj się E-mailem',
    id: 'register',
    mode: 'outlined',
    icon: require('./../../../assets/images/Icon_Mail.png'),
    navigateTo: 'Register'
};