export interface Person {
  id: string;
  name: string;
  enterTime: string;
  status: ConstrainBoolean;
}

export interface ApiResponse {
  success: boolean;
  data?: Person[];
  error?: string;
}

export interface AuthCredentials {
  username: string;
  password: string;
}
