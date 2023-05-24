import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStudents = createAsyncThunk(
    'student/fetchStudents',
    async () => {
        const response = await axios.get('/getStudents');
        return response.data.students;
    }
);

const studentSlice = createSlice({
    name: 'student',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default studentSlice.reducer;