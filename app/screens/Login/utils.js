import { emailRegex, PASS_MIN_LENGHT } from './constants';

export const validateLogin = (user, password) => {
  if (user === '' || password === '') {
    return 'Falta completar usario y/o contraseña';
  }

  if (user !== '' && !emailRegex.test(user)) {
    return 'Email inválido';
  }

  if (password !== '' && password.length < PASS_MIN_LENGHT) {
    return 'La contraseña debe contener al menos 8 caracteres';
  }

  return null;
};
