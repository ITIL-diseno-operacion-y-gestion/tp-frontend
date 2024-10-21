export interface UserLogin {
  email: string;
  contrasenia: string;
}

export interface UserBase {
  nombre: string;
  apellido: string;
  email: string;
}

export interface User extends UserBase {
  id: number;
}

export interface UserLoginResponse extends User {
  token: string;
}

export interface UserRegister extends UserBase {
  contrasenia: string;
}
