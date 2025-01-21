import { AuthState } from "@/features/auth/lib/types";

export type TokenState = Pick<AuthState, 'accessToken' | 'refreshToken' | 'isLoading' | 'error'>;
