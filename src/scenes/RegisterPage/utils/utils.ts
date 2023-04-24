
export const defaultObject = {
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
    is_fan: false,
    is_scout: false,
    is_player: false,
    is_trainer: false,
    phone: "",
    birthdate: "",
    language: 0,
    auto_update_lang: false
}

export const currentScreenHandler = ({
    currentScreen, setCurrentScreen
}: {
    currentScreen: number, setCurrentScreen: React.Dispatch<React.SetStateAction<number>>,
}) => { currentScreen !== 5 ? setCurrentScreen(prevState => prevState + 1) : null }