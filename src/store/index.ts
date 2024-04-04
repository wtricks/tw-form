import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // 
    },
    middleware: m => {
        return m({ serializableCheck: false })
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch