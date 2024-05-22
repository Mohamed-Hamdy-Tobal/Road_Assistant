const { configureStore } = require("@reduxjs/toolkit") ;
import authReducer from "./slices/authSlice"
import messageReducer from "./slices/message"
import tableReducer from "./slices/tableSlice"

//create a store and give it reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    message: messageReducer,
    table: tableReducer,
  },
});
