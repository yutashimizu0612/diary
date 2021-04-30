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

export type Post = {
  id: string;
  comment: string;
  star: number;
};

export type Accomplishment = {
  id: string;
  content: string;
  published: boolean;
};

export type AccomplishmentFormValues = {
  content: string;
  published: boolean;
};

export type Count = {
  date: string;
  count: number;
};
