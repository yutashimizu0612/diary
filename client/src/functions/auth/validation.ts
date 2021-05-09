import { SignUpFormValues, LoginFormValues } from '../../types';

export function validateSignUpForm(values: SignUpFormValues) {
  const errors = {};
  // ユーザ名
  if (!values.name) {
    Object.assign(errors, { name: 'ユーザ名は入力必須です。' });
  }
  // メールアドレス
  if (!values.email) {
    Object.assign(errors, { email: 'メールアドレスは入力必須です。' });
  } else {
    const emailRegexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!emailRegexp.test(values.email)) {
      Object.assign(errors, { email: '正しいメールアドレスを入力してください' });
    }
  }

  // パスワード
  if (!values.password) {
    Object.assign(errors, { password: 'パスワードは入力必須です。' });
  } else {
    const passwordRegexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{7,15}$/i;
    if (!passwordRegexp.test(values.password)) {
      Object.assign(errors, {
        password: '半角英数字を用いて、7文字以上15文字以内で入力してください。',
      });
    }
  }

  // 確認用パスワード
  if (!values.confirmation) {
    Object.assign(errors, { confirmation: '入力必須です。' });
  }

  if (values.password !== values.confirmation) {
    Object.assign(errors, { confirmation: 'パスワードが一致していません。' });
  }

  return errors;
}

export function validateLoginForm(values: LoginFormValues) {
  const errors = {};
  // メールアドレス
  if (!values.email) {
    Object.assign(errors, { email: 'メールアドレスは入力必須です。' });
  } else {
    const emailRegexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    if (!emailRegexp.test(values.email)) {
      Object.assign(errors, { email: '正しいメールアドレスを入力してください' });
    }
  }

  // パスワード
  if (!values.password) {
    Object.assign(errors, { password: 'パスワードは入力必須です。' });
  } else {
    const passwordRegexp = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{7,15}$/i;
    if (!passwordRegexp.test(values.password)) {
      Object.assign(errors, {
        password: 'パスワードは、半角英数字かつ7文字以上15文字以内です。',
      });
    }
  }

  return errors;
}

export function validateUpdateAccountForm(values: { name: string }) {
  const errors = {};
  // ユーザ名
  if (!values.name) {
    Object.assign(errors, { name: 'ユーザ名は入力必須です。' });
  }

  return errors;
}
