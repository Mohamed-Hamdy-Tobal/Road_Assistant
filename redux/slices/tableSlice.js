import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    filter: 10,
    status: 'idle',
    error: null,
    userLocation: null,
};

// Async thunk for fetching data
export const postTableData = createAsyncThunk('table/postTableData', async (serviceType, { getState }) => {
    const state = getState();
    const token = localStorage.getItem('token');
    const userLocation = state.table.userLocation;
    const filter = state.table.filter;

    console.log("Data Before Send In Table Dashboard:");
    console.log("Token:", token);
    console.log("userLocation:", userLocation);
    console.log("serviceType:", serviceType);
    console.log("filter:", filter);

    if (serviceType == "All" ) {
        serviceType = null
    }
    console.log("serviceType after:", serviceType);

    const response = await axios.post(
        'https://geodjango-test-no-docker.onrender.com/api/get-all-nearby/', 
        {
            current_location: userLocation,
            service_type: serviceType, // Include service type in the body
            radius: filter,
        },
        {
            headers: {
                Authorization: "Token " + token,
            }
        }
    );
    console.log("Table Data Fetched:", response);
    return response.data;
});


const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        setUserLocation(state, action) {
            const { lat, lon } = action.payload;
            state.userLocation = `Point ( ${lat} ${lon})`;
            // console.log("userLocation : ", state.userLocation);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postTableData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(postTableData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(postTableData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log("action.error.message : ", action.error.message);
            });
    },
});

export const { setFilter, setUserLocation } = tableSlice.actions;

export default tableSlice.reducer;
