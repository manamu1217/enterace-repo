// Basic認証のユーザー名とパスワード
export const CREDENTIALS = {
  username: 'admin',
  password: 'password123'
};

export const checkAuth = (username: string, password: string): boolean => {
  return username === CREDENTIALS.username && password === CREDENTIALS.password;
};