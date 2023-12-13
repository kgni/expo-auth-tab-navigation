import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import { supabaseApi } from './api';
import counterReducer from './counter/counterSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[supabaseApi.reducerPath]: supabaseApi.reducer,
	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(supabaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// TODO: figure out exactly what this is used for:
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
