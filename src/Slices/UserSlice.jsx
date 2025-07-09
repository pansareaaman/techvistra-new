import { createSlice } from '@reduxjs/toolkit';
import { getItem, setItem, removeItem } from '../Service/LocalStorageService'; // Fixed import

// const initialState = getItem("user") || null; // Ensure initial state is not undefined
// const initialState = getItem("user") ? getItem("user") : null;
const initialState = getItem("user") || {}; // ✅ Ensure it doesn't return `undefined`

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            setItem("user", action.payload);
            state = getItem("user");

            // ✅ Automatically remove the user after 30 minutes (1800000ms)
            setTimeout(() => {
                removeItem("user");
                localStorage.removeItem("user");
            }, 1800000);

            return state;
        },
        removeUser: (state) => {
            removeItem("user");
            localStorage.removeItem("user");
            return {};  // ✅ Return empty object instead of null
        }
        
    }
});

export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
