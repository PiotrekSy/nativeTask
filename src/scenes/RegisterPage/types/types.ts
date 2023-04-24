export type FormPostedData = {
  "username": string,
  "email": string,
  "password1": string,
  "password2": string,
  "first_name": string,
  "last_name": string,
  "is_fan": boolean,
  "is_trainer": boolean,
  "is_player": boolean,
  "is_scout": boolean,
  "phone": string,
  "birthdate": string,
  "language": number,
  "auto_update_lang": boolean,
};

export type PhonePageProps = {
  currentScreen: number,
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>,
  control: any;
  phoneError: string;
};

export type NamePageProps = {
  currentScreen: number,
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>,
  control: any;
  nameError: string;
};

export type EmailPageProps = {
  currentScreen: number,
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>,
  control: any;
  emailError: string
};

export type PasswordPageProps = {
  currentScreen: number,
  setCurrentScreen: React.Dispatch<React.SetStateAction<number>>,
  control: any;
  passwordError: string
};

export type NavProps = {
  goBack: () => void;
};

