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

export type LoginResponseData = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    auth: boolean;
  };
};
