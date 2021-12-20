import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../types";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);

interface userState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: userState = {
  users: [],
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
