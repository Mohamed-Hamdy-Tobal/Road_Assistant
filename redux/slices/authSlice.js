import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../service/auth.service";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Helper function to get initial state
const getInitialState = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
        return {
            user: user || null,
            token: token || null,
            error: null,
            loading: false,
            isLoggedIn: token ? token : false,
        };
    }
    return {
        user: null,
        token: null,
        error: null,
        loading: false,
        isLoggedIn: false,
    };
};

// Register thunk
export const register = createAsyncThunk(
    "auth/register",
    async ({ first_name, last_name, username, email, password, password2 }, thunkAPI) => {
        try {
            const response = await AuthService.register(first_name, last_name, username, email, password, password2);
            thunkAPI.dispatch(setMessage(response.message));
            toast.success(response.message);

            const { user, token } = response;
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", token);
            }

            return { user, token };
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            toast.error(message);
            return thunkAPI.rejectWithValue();
        }
    }
);

// Login thunk
export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await AuthService.login(username, password);
            toast.success("Login successful!");

            const { is_customer, token, user_id } = response;
            const user = { is_customer, user_id, username };

            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.setItem("token", token);
            }

            return { user, token };
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            toast.error(message);
            return thunkAPI.rejectWithValue();
        }
    }
);

// Logout action
const logoutAction = (state) => {
    if (typeof window !== "undefined" && window.localStorage) {
        const user = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");
        return {
            user: user || null,
            token: token || null,
            error: null,
            loading: false,
            isLoggedIn: token ? token : false,
        };
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {
        logout: logoutAction,
    },
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.token ? true: false;
                state.user = action.payload.user;
                console.log("USer : ", state.user)
                console.log("is signup : ", state.isLoggedIn)
                state.token = action.payload.token;
            })
            .addCase(register.rejected, (state) => {
                state.isLoggedIn = false;
                state.user = null;
                state.token = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.token ? true: false;
                state.user = action.payload.user;
                console.log("USer : ", state.user)
                console.log("isLoggedIn : ", state.isLoggedIn)
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state) => {
                state.isLoggedIn = false;
                state.user = null;
                state.token = null;
            });
    }
});

export const { logout } = authSlice.actions;
const { reducer } = authSlice;
export default reducer;
