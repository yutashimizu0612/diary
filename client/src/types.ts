export type SignUpFormValues = {
  name: string;
  email: string;
  password: string;
  confirmation: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type Accomplishment = {
  id: string;
  content: string;
  published: boolean;
};
