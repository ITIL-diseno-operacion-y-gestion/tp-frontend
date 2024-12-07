export type FormState<T> = {
  errors?: {
    [K in keyof T]?: string[]; // Map over the keys of T to create optional error messages
  };
  message?: string;
  fields?: Partial<T>;
};
