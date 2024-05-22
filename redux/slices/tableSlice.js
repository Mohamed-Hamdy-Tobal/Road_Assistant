import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    data: [],
    filter: 'all',
    status: 'idle',
    error: null,
    userLocation: null,
};

// Async thunk for fetching data
export const fetchData = createAsyncThunk('table/fetchData', async () => {
    const response = await axios.get('https://api.example.com/jobs');
    console.log("Table Data Fetched : ", response)
    return response.data;
});

// Helper function to calculate distance between two coordinates using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        setUserLocation(state, action) {
            state.userLocation = action.payload;
            console.log("userLocation : ", state.userLocation)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload.map((item) => ({
                    ...item,
                    distance: state.userLocation
                        ? calculateDistance(
                            state.userLocation.lat,
                            state.userLocation.lon,
                            item.location.lat,
                            item.location.lon
                        )
                        : null,
                })).sort((a, b) => a.distance - b.distance);
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                console.log("action.error.message : ", action.error.message)
            });
    },
});

export const { setFilter, setUserLocation } = tableSlice.actions;

export default tableSlice.reducer;