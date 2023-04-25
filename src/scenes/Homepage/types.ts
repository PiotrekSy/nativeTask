export type ButtonProps = {
    id: string,
    title: string,
    mode: string,
    icon?: any,
    navigateTo: 'Login' | 'Register',
};

export type ModeType = {
    mode: string,
};