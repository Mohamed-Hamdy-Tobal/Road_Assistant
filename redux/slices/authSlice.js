import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "../service/auth.service";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


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
            isLoggedIn: token ? token : "empty",
        };
    }
    return {
        user: null,
        token: null,
        error: null,
        loading: false,
        isLoggedIn: "empty",
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
            toast.error("Invalid Data!");
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
            console.log("THe response login", response)

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
            toast.error("Invalid Data!");
            return thunkAPI.rejectWithValue();
        }
    }
);

// Logout thunk
export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        let token;
        if (typeof window !== "undefined" && window.localStorage) {
            token = localStorage.getItem("token");
        }

        console.log("Logout Token 1 : ", token)

        try {
            const response = await axios.post(
                "https://geodjango-test-no-docker.onrender.com/api/logout/",
                {},
                {
                    headers: {
                        Authorization: "Token " + token,
                    }
                }
            );
            
            toast.success("Logout successful!");
            if (typeof window !== "undefined" && window.localStorage) {
                localStorage.setItem("user", JSON.stringify(null));
                localStorage.setItem("token", 'empty');
            }
            
            return { user: null, token: 'token' };

        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            console.log("Logout message : ", message)
            toast.error("Error during logout!");
            return thunkAPI.rejectWithValue();
        }
    }
);




const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    extraReducers: builder => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.token ? true : false;
                state.user = action.payload.user;
                console.log("USer : ", state.user)
                console.log("is signup : ", state.isLoggedIn)
                state.token = action.payload.token;
                state.loading = false;
            })
            .addCase(register.rejected, (state) => {
                state.isLoggedIn = 'empty';
                state.user = null;
                state.token = 'empty';
                state.loading = false;
                console.log("rejected")
            })
            .addCase(login.pending, (state) => {
                state.loading = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.token ? true : false;
                state.user = action.payload.user;
                console.log("USer : ", state.user)
                console.log("isLoggedIn : ", state.isLoggedIn)
                state.token = action.payload.token;
                state.loading = false;
            })
            .addCase(login.rejected, (state) => {
                state.isLoggedIn = 'empty';
                state.user = null;
                state.token = 'empty';
                state.loading = false;
                console.log("rejected")
            })
            .addCase(logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoggedIn = 'empty';
                state.user = null;
                state.token = 'empty';
                state.loading = false;
            })
            .addCase(logout.rejected, (state) => {
                state.loading = false;
            });
    }
});


const { reducer } = authSlice;
export default reducer;
