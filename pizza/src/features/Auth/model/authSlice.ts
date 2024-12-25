import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  accessToken: string | null;   
  refreshToken: string | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: { 

    refreshTokenRequest(state, action: PayloadAction<{ token: string }>) {
      state.isLoading = true;
    },
    refreshTokenSuccess(state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoading = false;
    },
    refreshTokenFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
      
    loginRequest(state, action: PayloadAction<{ email: string; password: string }>) {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess(state, action: PayloadAction<{ user: string; accessToken: string; refreshToken: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoading = false;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    sendCodeRequest(state, action: PayloadAction<{ phone: string }>) {
      state.isLoading = true;
      state.error = null;
    },
    sendCodeSuccess(state, action: PayloadAction<{ message: string; code?: string }>) {
      state.isLoading = false;
      state.error = null;
    },
    sendCodeFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    

    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.error = null;
    },
  },
});

export const {
  sendCodeRequest,
  sendCodeSuccess,
  sendCodeFailure,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;