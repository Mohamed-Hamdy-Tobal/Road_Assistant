import axios from "axios";

const API_URL_LogIn = "https://geodjango-test-no-docker.onrender.com/api/login/";
const API_URL_SignUP = "https://geodjango-test-no-docker.onrender.com/api/signup/customer/";

const register = async (first_name, last_name, username, email, password, password2) => {
    try {
        console.log("Data Was Sent Sign Up: ", first_name, last_name, username, email, password, password2);
        const response = await axios.post(API_URL_SignUP, { first_name, last_name, username, email, password, password2 });

        if (response && response.data) {
            console.log("**Success Sign Up!**");
            console.log(response.data);
            return response.data;
        } else {
            throw new Error("Unexpected response structure");
        }
    } catch (error) {
        console.error("Sign Up Error: ", error);
        throw error;
    }
};

const login = async (username, password) => {
    try {
        console.log("Data Was Sent: ", username, password);
        const response = await axios.post(API_URL_LogIn, { username, password });

        if (response.data.is_customer) {
            console.log("**Success Login!**")
        }
        if (response && response.data) {
            console.log(response.data);
            return response.data;
        } else {
            throw new Error("Unexpected response structure");
        }
        
    } catch (error) {
        console.error("Login Error: ", error);
        throw error;
    }
};

const logout = () => {
    // return axios.post(API_URL + "signout").then((response) => {
    //     return response.data;
    // });
    if (typeof window !== "undefined") { // Check if window is defined
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }
};


const AuthService = {
    register,
    login,
    logout,
}

export default AuthService;