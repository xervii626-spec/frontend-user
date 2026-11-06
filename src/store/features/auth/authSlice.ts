import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { StoredPlayer } from "@/lib/auth-storage";

export type AuthState = {
  accessToken: string | null;
  player: StoredPlayer | null;
  remember: boolean;
  hydrated: boolean;
};

const initialState: AuthState = {
  accessToken: null,
  player: null,
  remember: true,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{
        accessToken: string;
        player: StoredPlayer;
        remember: boolean;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.player = action.payload.player;
      state.remember = action.payload.remember;
      state.hydrated = true;
    },
    hydrateAuth(
      state,
      action: PayloadAction<{
        accessToken: string | null;
        player: StoredPlayer | null;
        remember: boolean;
      }>,
    ) {
      state.accessToken = action.payload.accessToken;
      state.player = action.payload.player;
      state.remember = action.payload.remember;
      state.hydrated = true;
    },
    clearCredentials(state) {
      state.accessToken = null;
      state.player = null;
      state.hydrated = true;
    },
  },
});

export const { setCredentials, hydrateAuth, clearCredentials } =
  authSlice.actions;
export default authSlice.reducer;
