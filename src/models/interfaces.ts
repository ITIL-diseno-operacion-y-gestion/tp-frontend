export interface UserBase {
  nombre: string;
  apellido: string;
  email: string;
}

export interface UserCreate extends UserBase {
  contrasenia: string;
}

export interface User extends UserBase {
  id: number;
}
